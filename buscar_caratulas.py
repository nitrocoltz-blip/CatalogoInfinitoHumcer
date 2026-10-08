#!/usr/bin/env python3
import difflib, json, re, sys, time, unicodedata, urllib.parse, urllib.request
from pathlib import Path

JS = Path(sys.argv[1] if len(sys.argv) > 1 else "script.js")
CACHE = Path("caratulas.json")
MANUAL = Path("caratulas_manual.json")

LINE = re.compile(
    r'^(\s*\{ name:(".*?"), platform:"(.*?)", status:"\w+"(?:, appid:\d+)?)(, img:".*?", url:".*?" \},?)\s*$'
)

def norm(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    s = re.sub(r"[^a-z0-9]+", " ", s.replace("&", " and "))
    return re.sub(r"\s+", " ", s).strip()

def search(name):
    q = urllib.parse.urlencode({"term": name, "l": "english", "cc": "US"})
    url = "https://store.steampowered.com/api/storesearch/?" + q
    for intento in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=20) as r:
                data = json.load(r)
            return data.get("items", []) if isinstance(data, dict) else []
        except Exception as e:
            print("   reintento", intento + 1, e)
            time.sleep(2)
    return []

def best(name):
    items = [i for i in search(name) if i.get("id") and i.get("name")]
    if not items:
        return None
    n = norm(name)
    scored = [(difflib.SequenceMatcher(None, n, norm(i["name"])).ratio(), i) for i in items]
    score, item = max(scored, key=lambda t: t[0])
    return {"id": int(item["id"]), "steam_name": item["name"], "score": round(score, 2)}

def main():
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.exists() else {}
    manual = json.loads(MANUAL.read_text(encoding="utf-8")) if MANUAL.exists() else {}
    lines = JS.read_text(encoding="utf-8").splitlines()

    games = []
    for line in lines:
        m = LINE.match(line)
        if m:
            games.append((m, json.loads(m.group(2)), m.group(3)))

    print(f"{len(games)} juegos encontrados en {JS}")

    for i, (_, name, platform) in enumerate(games, 1):
        key = norm(name)
        if name in manual or key in cache:
            continue
        print(f"[{i}/{len(games)}] {name} [{platform}]")
        cache[key] = best(name)
        CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=1), encoding="utf-8")
        time.sleep(0.6)

    out = []
    revisar = []
    faltan = []

    for line in lines:
        m = LINE.match(line)
        if not m:
            out.append(line)
            continue

        name = json.loads(m.group(2))
        old = m.group(1)
        rest = m.group(4)
        result = manual.get(name) or cache.get(norm(name))
        appid = None

        if isinstance(result, int):
            appid = result
        elif isinstance(result, dict) and result.get("id"):
            if result.get("score", 0) >= 0.55:
                appid = int(result["id"])
            if result.get("score", 0) < 0.85:
                revisar.append((name, result.get("steam_name", ""), result.get("score", 0), result.get("id")))

        if not appid:
            faltan.append(name)

        old = re.sub(r', appid:\d+', '', old)
        out.append(old + (f", appid:{appid}" if appid else "") + rest)

    JS.write_text("\n".join(out) + "\n", encoding="utf-8")

    print(f"\nListo. AppID encontrado: {len(games) - len(faltan)} de {len(games)}")
    if revisar:
        print("\nA REVISAR:")
        for n, s, sc, i in revisar:
            print(f"  {n} -> {s} (similitud {sc}, appid {i})")
    if faltan:
        print("\nSIN COINCIDENCIA:")
        for n in faltan:
            print("  ", n)

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Refresh the public MapMyVisitors cumulative pageview count."""

from __future__ import annotations

import json
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


ENDPOINT = "https://mapmyvisitors.com/ajax/orange_dots"
PARAMS = {
    "id": "2246256",
    "last_hit_id": "0",
    "max_hit_id": "0",
    "max_visit_count": "0",
}
OUTPUT = Path(__file__).resolve().parents[2] / "data" / "visitor-stats.json"


def main() -> None:
    query = urllib.parse.urlencode(PARAMS)
    request = urllib.request.Request(
        f"{ENDPOINT}?{query}",
        headers={"User-Agent": "rayford295.github.io visitor statistics updater"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.load(response)

    total = payload.get("total_hits")
    if not isinstance(total, int) or total < 0:
        raise ValueError("MapMyVisitors returned no valid total_hits value")

    OUTPUT.write_text(
        json.dumps(
            {
                "total_pageviews": total,
                "updated_at": datetime.now(timezone.utc)
                .replace(microsecond=0)
                .isoformat()
                .replace("+00:00", "Z"),
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"Updated {OUTPUT} with total_pageviews={total}")


if __name__ == "__main__":
    main()

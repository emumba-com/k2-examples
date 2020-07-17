# Mock Data.

## Column Chart.

Following snippets represent simple mock data to draw Column charts. Each object in array is bar/column series, for api reference you can follow [this](https://uber.github.io/react-vis/documentation/series-reference/bar-series).

Simple single column chart data

```JSON
[
  {
    "name":"series 1",
    "data":[
      {"y":100,"x":"bar-1"},
      {"y":200,"x":"bar-2"},
      {"y":300,"x":"bar-3"},
      {"y":400,"x":"bar-4"},
      {"y":100,"x":"bar-11"},
      {"y":200,"x":"bar-12"},
      {"y":300,"x":"bar-13"},
      {"y":400,"x":"bar-14"}
    ]
  }
]
```

Multiple columns (Stacked, Grouped)

```JSON
[
  {
    "name":"Embedded Links",
    "data":[
      {"y":100,"x":"Jun 1"},
      {"y":200,"x":"Jun 2"},
      {"y":300,"x":"Jun 3"},
      {"y":400,"x":"Jun 4"},
      {"y":100,"x":"Jun 5"},
      {"y":200,"x":"Jun 6"},
      {"y":300,"x":"Jun 7"},
      {"y":400,"x":"Jun 8"}
    ]
  },
  {
    "name":"Inside Links",
    "data":[
      {"y":100,"x":"Jun 1"},
      {"y":200,"x":"Jun 2"},
      {"y":300,"x":"Jun 3"},
      {"y":400,"x":"Jun 4"},
      {"y":100,"x":"Jun 5"},
      {"y":200,"x":"Jun 6"},
      {"y":300,"x":"Jun 7"},
      {"y":400,"x":"Jun 8"}
    ]
  },
  {
    "name":"Outside Links",
    "data":[
      {"y":100,"x":"Jun 1"},
      {"y":200,"x":"Jun 2"},
      {"y":300,"x":"Jun 3"},
      {"y":400,"x":"Jun 4"},
      {"y":100,"x":"Jun 5"},
      {"y":200,"x":"Jun 6"},
      {"y":300,"x":"Jun 7"},
      {"y":400,"x":"Jun 8"}
    ]
  }
]
```

Single column chart with multiple colors.

```JSON
[
  {
    "name":"Low",
    "color":"#ef8057",
    "data":[{"y":36.42,"x":"Low"}]},
  {
    "name":"Mid",
    "color":"#ffb964",
    "data":[{"y":60.42,"x":"Mid"}]
  },
  {
    "name":"High",
    "color":"#6098f3",
    "data":[{"y":80,"x":"High"}]
  }
]
```

## Line Chart

Line chart is combination of line and mark series. Data is array of object and object can be [line](https://uber.github.io/react-vis/documentation/series-reference/line-series) or [mark](https://uber.github.io/react-vis/documentation/series-reference/line-mark-series) series.

Simple line chart data.

```JSON
[
  {
    "name":"Time Spent in App",
    "curve":"curveMonotoneX",
    "data":[
      {"x":"1750","y":0},
      {"x":"1800","y":1},
      {"x":"1850","y":0.4},
      {"x":"1900","y":0.3},
      {"x":"1950","y":1},
      {"x":"2000","y":0.2},
      {"x":"2050","y":1}
    ]
  },
  {
    "name":"Time Spent in App Due to Push",
    "curve":"curveMonotoneX",
    "data":[
      {"x":"1750","y":0},
      {"x":"1800","y":0.8},
      {"x":"1850","y":0.3},
      {"x":"1900","y":0},
      {"x":"1950","y":0.6},
      {"x":"2000","y":0.5},
      {"x":"2050","y":1.5}
    ]
  }
]
```

Simple line mark series.

```JSON
[
  {
    "name":"Apps Open",
    "color":"#6098f3",
    "size":4, // An additional property which represents mark size.
    "data":[
      {"x":"Jan","y":0.7},
      {"x":"Feb","y":0.9},
      {"x":"Mar","y":0.8},
      {"x":"Apr","y":0.85},
      {"x":"May","y":0.95},
      {"x":"Jun","y":0.9},
      {"x":"Jul","y":0.8},
      {"x":"Aug","y":0.85},
      {"x":"Sep","y":0.9},
      {"x":"Oct","y":0.8},
      {"x":"Nov","y":0.75},
      {"x":"Dec","y":0.9}
    ]
  }
]
```

Line chart with filled and dashed lines.

```JSON
[
  {
    "name":"fwd_client_ingress",
    "color":"#E5BE20",
    "strokeWidth":3,
    "curve":"curveMonotoneX",
    "data":[
      {"x":"17:20:00","y":15},
      {"x":"17:20:30","y":16},
      {"x":"17:21:00","y":13},
      {"x":"17:21:30","y":12},
      {"x":"17:22:00","y":11},
      {"x":"17:22:30","y":10},
      {"x":"17:23:00","y":12},
      {"x":"17:23:30","y":11},
      {"x":"17:24:00","y":8},
      {"x":"17:24:30","y":10},
      {"x":"17:25:00","y":13},
      {"x":"17:25:30","y":15}
    ]
  },
  {
    "name":"fwd_fw_ingress",
    "color":"#688BBF",
    "strokeWidth":3,
    "curve":"curveMonotoneX",
    "data":[
      {"x":"17:20:00","y":14},
      {"x":"17:20:30","y":12},
      {"x":"17:21:00","y":15},
      {"x":"17:21:30","y":13},
      {"x":"17:22:00","y":12},
      {"x":"17:22:30","y":13},
      {"x":"17:23:00","y":10},
      {"x":"17:23:30","y":11},
      {"x":"17:24:00","y":12},
      {"x":"17:24:30","y":14},
      {"x":"17:25:00","y":15},
      {"x":"17:25:30","y":16}
    ]
  },
  {
    "name":"fwd_fw_egress",
    "color":"#27B3DE",
    "strokeWidth":3,
    "curve":"curveMonotoneX",
    "strokeDasharray":"15 4",
    "data":[
      {"x":"17:20:00","y":12},
      {"x":"17:20:30","y":14},
      {"x":"17:21:00","y":11},
      {"x":"17:21:30","y":14},
      {"x":"17:22:00","y":15},
      {"x":"17:22:30","y":12},
      {"x":"17:23:00","y":11},
      {"x":"17:23:30","y":13},
      {"x":"17:24:00","y":15},
      {"x":"17:24:30","y":12},
      {"x":"17:25:00","y":14},
      {"x":"17:25:30","y":16}
    ]
  },
  {
    "name":"fwd_server_egress",
    "color":"#A575B6",
    "strokeWidth":3,
    "curve":"curveMonotoneX",
    "strokeDasharray":"15 4",
    "data":[
      {"x":"17:20:00","y":10},
      {"x":"17:20:30","y":13},
      {"x":"17:21:00","y":11},
      {"x":"17:21:30","y":12},
      {"x":"17:22:00","y":9},
      {"x":"17:22:30","y":11},
      {"x":"17:23:00","y":11},
      {"x":"17:23:30","y":9},
      {"x":"17:24:00","y":11},
      {"x":"17:24:30","y":10},
      {"x":"17:25:00","y":12},
      {"x":"17:25:30","y":14}
    ]
  }
]
```

Line chart with step curve.

```JSON
[
  {
    "name":"blue",
    "curve":"curveStep",
    "data":[
      {"x":"Jan","y":0.9},
      {"x":"Feb","y":0.86},
      {"x":"Mar","y":0.91},
      {"x":"Apr","y":0.85},
      {"x":"May","y":0.88},
      {"x":"Jun","y":0.9},
      {"x":"Jul","y":0.8},
      {"x":"Aug","y":0.93},
      {"x":"Sep","y":0.9},
      {"x":"Oct","y":0.9},
      {"x":"Nov","y":0.9},
      {"x":"Dec","y":0.85}
    ]
  },
  {
    "name":"yellow",
    "curve":"curveStep",
    "data":[
      {"x":"Jan","y":0.8},
      {"x":"Feb","y":0.85},
      {"x":"Mar","y":0.8},
      {"x":"Apr","y":0.83},
      {"x":"May","y":0.83},
      {"x":"Jun","y":0.85},
      {"x":"Jul","y":0.85},
      {"x":"Aug","y":0.85},
      {"x":"Sep","y":0.87},
      {"x":"Oct","y":0.82},
      {"x":"Nov","y":0.82},
      {"x":"Dec","y":0.75}
    ]
  }
]
```

## Pie / Donut Chart.

```JSON
[
  {"label":"Global Admin","value":1},
  {"label":"Custom Admin","value":17},
  {"label":"Users","value":8}
]
```

## Sankey Chart

```JSON
{
  "nodes": [
    {
      "id": "Node1",
      "label": "High",
      "type": "priority"
    },
    {
      "id": "Node2",
      "label": "Medium",
      "type": "priority"
    },
    {
      "id": "Node3",
      "label": "Low",
      "type": "priority"
    },
    {
      "id": "Node4",
      "label": "Testing",
      "type": "category"
    },
    {
      "id": "Node5",
      "label": "Tony Ojeda",
      "type": "user"
    },
    {
      "id": "Node6",
      "label": "In Progress",
      "type": "status"
    },
    {
      "id": "Node7",
      "label": "Pending",
      "type": "status"
    },
    {
      "id": "Node8",
      "label": "Deployment",
      "type": "category"
    },
    {
      "id": "Node9",
      "label": "Octavian Stepan",
      "type": "user"
    }
  ],
  "links": [
    {
      "id": "Link1",
      "source": 3,
      "target": 4,
      "value": 360
    },
    {
      "id": "Link2",
      "source": 4,
      "target": 0,
      "value": 4
    },
    {
      "id": "Link3",
      "source": 0,
      "target": 5,
      "value": 4
    },
    {
      "id": "Link4",
      "source": 4,
      "target": 2,
      "value": 350
    },
    {
      "id": "Link5",
      "source": 2,
      "target": 5,
      "value": 32
    },
    {
      "id": "Link6",
      "source": 2,
      "target": 6,
      "value": 318
    },
    {
      "id": "Link7",
      "source": 4,
      "target": 1,
      "value": 6
    },
    {
      "id": "Link8",
      "source": 1,
      "target": 5,
      "value": 4
    },
    {
      "id": "Link9",
      "source": 1,
      "target": 6,
      "value": 378
    },
    {
      "id": "Link10",
      "source": 7,
      "target": 8,
      "value": 376
    },
    {
      "id": "Link11",
      "source": 8,
      "target": 1,
      "value": 376
    }
  ]
}
```

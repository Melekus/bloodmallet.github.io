Highcharts.chart('shaman_elemental_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                365868,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                9393,
                16506,
                17014,
                15787,
                18981,
                18679,
                20633,
                10355,
                23910,
                15586,
                18918,
                17608,
                25881,
                24771,
                17502,
                19729,
                9910,
                15742,
                19934,
                0,
                18442,
                6697,
                13558,
                0,
                14954,
                17972,
                14229,
                15389,
                11735,
                6008,
                4961,
                9778,
                0,
                2019,
                0,
                11630,
                9507,
                4664,
                2073,
                10431,
                6407,
                4968,
                4610,
                9326,
                2830,
                6246,
                616,
                0,
                3670
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                9053,
                21585,
                18636,
                16495,
                18073,
                17553,
                15903,
                19164,
                16031,
                14304,
                4909,
                10786,
                0,
                20984,
                12205,
                3993,
                17228,
                6482,
                14777,
                0,
                8040,
                28359,
                15564,
                13637,
                19437,
                10747,
                12924,
                8163,
                0,
                22834,
                9346,
                16288,
                13985,
                20671,
                0,
                867,
                19029,
                13816,
                8560,
                4187,
                0,
                12197,
                9627,
                6261,
                4551,
                2580,
                2426,
                8002,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                11022,
                9215,
                19118,
                20547,
                16847,
                9055,
                9644,
                15306,
                12233,
                16409,
                23816,
                10094,
                17514,
                7459,
                11252,
                14523,
                3004,
                23640,
                1434,
                0,
                13272,
                0,
                2543,
                5228,
                11036,
                1709,
                5709,
                405,
                16972,
                13064,
                19056,
                8532,
                0,
                1449,
                0,
                9388,
                6074,
                0,
                8033,
                8218,
                7346,
                0,
                9294,
                2864,
                9458,
                9985,
                5539,
                1041,
                7084
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                14566,
                12803,
                2107,
                0,
                8811,
                13053,
                17953,
                8666,
                2046,
                17047,
                2608,
                12749,
                14045,
                18600,
                18021,
                16486,
                21205,
                7910,
                25072,
                0,
                9382,
                10991,
                18185,
                10910,
                18456,
                14026,
                9816,
                12935,
                2259,
                4147,
                8383,
                15967,
                4003,
                3706,
                0,
                4881,
                17920,
                6865,
                5776,
                4791,
                13310,
                9456,
                2661,
                2877,
                2534,
                0,
                0,
                1148,
                4568
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                7198,
                230225,
                19371,
                18036,
                15818,
                18764,
                10369,
                17323,
                18368,
                3678,
                14730,
                10097,
                9518,
                15330,
                9935,
                10694,
                11862,
                11490,
                11073,
                9162,
                10276,
                15782,
                0,
                16432,
                6581,
                15284,
                10638,
                11962,
                13325,
                19757,
                7029,
                4881,
                11712,
                5324,
                8018,
                1847,
                2582,
                4432,
                6569,
                13051,
                846,
                1927,
                6571,
                14274,
                7414,
                9890,
                4112,
                8056,
                2474
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                9815,
                0,
                194304,
                11414,
                7988,
                178269,
                8072,
                8987,
                7082,
                14286,
                12435,
                4961,
                17531,
                16765,
                5712,
                6412,
                3453,
                7240,
                14934,
                9277,
                6202,
                10307,
                8781,
                148574,
                6696,
                1622,
                5713,
                589,
                136587,
                3787,
                6453,
                16913,
                7819,
                12611,
                18185,
                15520,
                9010,
                2263,
                8859,
                99393,
                2039,
                4731,
                7463,
                0,
                1092,
                581,
                2085,
                7602,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                241319,
                0,
                0,
                190005,
                177997,
                0,
                168563,
                165211,
                162535,
                156809,
                159452,
                168817,
                155243,
                123129,
                150421,
                152723,
                154684,
                141913,
                126686,
                188740,
                136461,
                129354,
                138132,
                0,
                116995,
                125710,
                127614,
                135470,
                0,
                108625,
                122280,
                101764,
                131101,
                114944,
                133994,
                114338,
                93796,
                116134,
                104717,
                0,
                110573,
                100927,
                84330,
                93168,
                93526,
                92080,
                99537,
                70931,
                68032
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Shaman - Elemental - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Tome of Unraveling Sanity",
            "Spectral Thurible",
            "Whispers in the Dark",
            "Stat Stick (Crit)",
            "Charm of the Rising Tide",
            "Eyasu's Mulligan",
            "Infernal Writ",
            "Erratic Metronome",
            "Stat Stick (Haste)",
            "Padawsen's Unlucky Charm",
            "Dreadstone of Endless Shadows",
            "Icon of Rot",
            "Star Gate",
            "PVP Badge of Dominance",
            "Stat Stick (Versatility)",
            "Chrono Shard",
            "Stat Stick (Mastery)",
            "Deteriorated Construct Core",
            "Darkmoon Deck: Hellfire",
            "Horn of Valor",
            "Stormsinger Fulmination Charge",
            "PVP Insignia of Dominance",
            "Astral Alchemist Stone",
            "Reality Breacher",
            "Aran's Relaxing Ruby",
            "Moonlit Prism",
            "Eye of Skovald",
            "Terror From Below",
            "Twisting Wind",
            "Fury of the Burning Sky",
            "Bough of Corruption",
            "Unstable Horrorslime",
            "Elementium Bomb Squirrel Generator",
            "Infernal Alchemist Stone",
            "Devilsaur Shock-Baton",
            "Portable Manacracker",
            "Mrrgria's Favor",
            "Obelisk of the Void",
            "Tarnished Sentinel Medallion",
            "Wriggling Sinew",
            "Toe Knee's Promise",
            "Caged Horror",
            "Corrupted Starlight",
            "Swarming Plaguehive",
            "Oakheart's Gnarled Root",
            "Figurehead of the Naglfar",
            "Pharameres Forbidden Grimoire",
            "Naraxas' Spiked Tongue"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 195213",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 195213.7,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});
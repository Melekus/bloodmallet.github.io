Highcharts.chart('druid_balance_beastlord', 
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
                0,
                172103,
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
                17163,
                0,
                9313,
                10554,
                10106,
                9361,
                14699,
                6224,
                7185,
                6964,
                7062,
                6928,
                8320,
                7807,
                6733,
                6440,
                6544,
                6754,
                9788,
                6833,
                6526,
                9074,
                6204,
                7581,
                5430,
                4385,
                6586,
                7671,
                5020,
                5566,
                8199,
                1953,
                0,
                5178,
                3937,
                3903,
                474,
                4629,
                0,
                5990,
                5232,
                3128,
                5798,
                0,
                3736,
                3884,
                3954,
                1416,
                1577,
                382
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                14055,
                0,
                8986,
                13237,
                10596,
                9786,
                5989,
                7245,
                4624,
                8459,
                9154,
                9196,
                6971,
                9215,
                6910,
                7969,
                8513,
                6838,
                3159,
                7558,
                7296,
                7050,
                6278,
                4088,
                6914,
                7603,
                5319,
                5765,
                7205,
                6897,
                5964,
                7255,
                4848,
                6509,
                5568,
                4991,
                3935,
                2786,
                0,
                3881,
                6834,
                3945,
                3430,
                0,
                2726,
                4967,
                1600,
                2946,
                1637,
                2734
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                13666,
                0,
                8833,
                7712,
                10324,
                7617,
                12781,
                5956,
                459,
                8259,
                6469,
                9174,
                7019,
                2662,
                4626,
                4327,
                2865,
                6466,
                5944,
                1739,
                4339,
                8058,
                5020,
                8358,
                8176,
                6449,
                7397,
                5536,
                4688,
                5034,
                3954,
                0,
                7019,
                4118,
                3540,
                4596,
                4760,
                4630,
                0,
                2295,
                1656,
                3306,
                3877,
                0,
                2569,
                495,
                5319,
                1038,
                1772,
                797
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                13923,
                0,
                11325,
                10111,
                6421,
                11144,
                5233,
                8163,
                6297,
                5364,
                3481,
                6151,
                3721,
                5874,
                7463,
                6047,
                4631,
                5178,
                6551,
                7481,
                3859,
                5949,
                4412,
                4209,
                6794,
                3945,
                3819,
                4075,
                7779,
                2910,
                3540,
                6188,
                5759,
                3564,
                7397,
                5387,
                4871,
                3660,
                0,
                4746,
                8021,
                3136,
                4669,
                0,
                2506,
                2472,
                0,
                1996,
                0,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                11997,
                0,
                5892,
                9430,
                4738,
                6652,
                11459,
                2241,
                5235,
                5097,
                7549,
                7794,
                5576,
                5480,
                3962,
                4188,
                5249,
                68763,
                5338,
                4219,
                5900,
                7416,
                4833,
                3948,
                7795,
                4642,
                3738,
                5957,
                4488,
                5523,
                4373,
                0,
                5356,
                4514,
                616,
                4359,
                3944,
                2449,
                4486,
                394,
                1971,
                3363,
                0,
                1769,
                4568,
                4764,
                3011,
                952,
                2594,
                5766
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                132090,
                0,
                7692,
                9611,
                8494,
                5115,
                9672,
                6323,
                6302,
                79689,
                72367,
                6083,
                6302,
                2955,
                67863,
                6397,
                6640,
                0,
                4558,
                5779,
                2095,
                770,
                4700,
                5036,
                2320,
                5326,
                5023,
                3020,
                4634,
                3862,
                3969,
                4174,
                57800,
                3228,
                3499,
                3348,
                2813,
                4984,
                5589,
                3655,
                4916,
                3642,
                7470,
                1018,
                2910,
                549,
                4421,
                222,
                386,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                89857,
                79133,
                86106,
                85891,
                71491,
                89070,
                84875,
                0,
                0,
                57414,
                61807,
                64309,
                0,
                59639,
                59941,
                0,
                58533,
                58959,
                61745,
                52047,
                58793,
                56872,
                51040,
                56002,
                55772,
                55020,
                52030,
                53138,
                52728,
                62679,
                0,
                52405,
                52772,
                46197,
                51712,
                48322,
                61190,
                47527,
                35609,
                43717,
                38183,
                59062,
                40995,
                42550,
                34527,
                28933,
                25607,
                25081
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Druid - Balance - Beastlord"
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
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Fury of the Burning Sky",
            "Star Gate",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Deteriorated Construct Core",
            "Whispers in the Dark",
            "Unstable Arcanocrystal",
            "Tarnished Sentinel Medallion",
            "Charm of the Rising Tide",
            "Reality Breacher",
            "Dreadstone of Endless Shadows",
            "Chrono Shard",
            "Terror From Below",
            "Erratic Metronome",
            "Stat Stick (Mastery)",
            "Tome of Unraveling Sanity",
            "Stat Stick (Haste)",
            "Stat Stick (Crit)",
            "Eyasu's Mulligan",
            "Bough of Corruption",
            "Stat Stick (Versatility)",
            "Infernal Writ",
            "Twisting Wind",
            "Stormsinger Fulmination Charge",
            "Eye of Skovald",
            "PVP Badge of Dominance",
            "Padawsen's Unlucky Charm",
            "Moonlit Prism",
            "Horn of Valor",
            "Unstable Horrorslime",
            "Astral Alchemist Stone",
            "Corrupted Starlight",
            "PVP Insignia of Dominance",
            "Obelisk of the Void",
            "Caged Horror",
            "Devilsaur Shock-Baton",
            "Darkmoon Deck: Hellfire",
            "Elementium Bomb Squirrel Generator",
            "Portable Manacracker",
            "Toe Knee's Promise",
            "Swarming Plaguehive",
            "Infernal Alchemist Stone",
            "Oakheart's Gnarled Root",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Naraxas' Spiked Tongue",
            "Pharameres Forbidden Grimoire",
            "Figurehead of the Naglfar"
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
                    text: "mean at 91154",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 91154.28,
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
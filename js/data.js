const data = {
    "charles": {
        "name": "Charles Wu",
        "plus": [
            [
                "lucy",
                "Lucy Yip"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "0",
        "group": "Charles Wu, Lucy Yip"
    },
    "lucy": {
        "name": "Lucy Yip",
        "plus": [
            [
                "charles",
                "Charles Wu"
            ]
        ],
        "meal": "Summer Ratatouille Lasagna (vegan + gluten-free)",
        "table_number": "0",
        "group": "Charles Wu, Lucy Yip"
    },
    "jacquelinekwan": {
        "name": "Jacqueline Kwan",
        "plus": [
            [
                "kongyuwu",
                "Kong Yu Wu"
            ],
            [
                "wincy",
                "Wincy Wu"
            ],
            [
                "joyce",
                "Joyce Wu"
            ],
            [
                "jay",
                "Jay Wu"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "jay": {
        "name": "Jay Wu",
        "plus": [
            [
                "kongyuwu",
                "Kong Yu Wu"
            ],
            [
                "jacquelinekwan",
                "Jacqueline Kwan"
            ],
            [
                "wincy",
                "Wincy Wu"
            ],
            [
                "joyce",
                "Joyce Wu"
            ]
        ],
        "meal": "Kid's Meal",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "joyce": {
        "name": "Joyce Wu",
        "plus": [
            [
                "kongyuwu",
                "Kong Yu Wu"
            ],
            [
                "jacquelinekwan",
                "Jacqueline Kwan"
            ],
            [
                "wincy",
                "Wincy Wu"
            ],
            [
                "jay",
                "Jay Wu"
            ]
        ],
        "meal": "Summer Ratatouille Lasagna (vegan + gluten-free)",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "kongyuwu": {
        "name": "Kong Yu Wu",
        "plus": [
            [
                "jacquelinekwan",
                "Jacqueline Kwan"
            ],
            [
                "wincy",
                "Wincy Wu"
            ],
            [
                "joyce",
                "Joyce Wu"
            ],
            [
                "jay",
                "Jay Wu"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "kwokchor": {
        "name": "Kwok Chor Wu",
        "plus": [
            [
                "tungmui",
                "Tung Mui Cheung"
            ],
            [
                "ngaichit",
                "Ngai Chit Wu"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "ngaichit": {
        "name": "Ngai Chit Wu",
        "plus": "none",
        "meal": "NY Strip (gluten-free)",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "tungmui": {
        "name": "Tung Mui Cheung",
        "plus": [
            [
                "kwokchor",
                "Kwok Chor Wu"
            ],
            [
                "ngaichit",
                "Ngai Chit Wu"
            ]
        ],
        "meal": "Summer Ratatouille Lasagna (vegan + gluten-free)",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "wincy": {
        "name": "Wincy Wu",
        "plus": [
            [
                "kongyuwu",
                "Kong Yu Wu"
            ],
            [
                "jacquelinekwan",
                "Jacqueline Kwan"
            ],
            [
                "joyce",
                "Joyce Wu"
            ],
            [
                "jay",
                "Jay Wu"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "1",
        "group": "Jacqueline Kwan, Jay Wu, Joyce Wu, Kong Yu Wu, Kwok Chor Wu, Ngai Chit Wu, Tung Mui Cheung, Wincy Wu"
    },
    "haohan": {
        "name": "Haohan\u0003Zhang",
        "plus": [
            [
                "shaohuai",
                "Shaohuai\u0003Zhang"
            ],
            [
                "menglin",
                "Menglin Dong"
            ]
        ],
        "meal": "Kid's Meal",
        "table_number": "2",
        "group": "Haohan\u0003Zhang, Iris Yip, Lap Tung, Menglin Dong, Ruyi Yan, Shaohuai\u0003Zhang, Waiwan Yip"
    },
    "iris": {
        "name": "Iris Yip",
        "plus": "none",
        "meal": "NY Strip (gluten-free)",
        "table_number": "2",
        "group": "Haohan\u0003Zhang, Iris Yip, Lap Tung, Menglin Dong, Ruyi Yan, Shaohuai\u0003Zhang, Waiwan Yip"
    },
    "tung": {
        "name": "Lap Tung",
        "plus": [
            [
                "yip",
                "Waiwan Yip"
            ],
            [
                "iris",
                "Iris Yip"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "2",
        "group": "Haohan\u0003Zhang, Iris Yip, Lap Tung, Menglin Dong, Ruyi Yan, Shaohuai\u0003Zhang, Waiwan Yip"
    },
    "menglin": {
        "name": "Menglin Dong",
        "plus": [
            [
                "shaohuai",
                "Shaohuai\u0003Zhang"
            ],
            [
                "haohan",
                "Haohan\u0003Zhang"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "2",
        "group": "Haohan\u0003Zhang, Iris Yip, Lap Tung, Menglin Dong, Ruyi Yan, Shaohuai\u0003Zhang, Waiwan Yip"
    },
    "ruyi": {
        "name": "Ruyi Yan",
        "plus": "none",
        "meal": "NY Strip (gluten-free)",
        "table_number": "2",
        "group": "Haohan\u0003Zhang, Iris Yip, Lap Tung, Menglin Dong, Ruyi Yan, Shaohuai\u0003Zhang, Waiwan Yip"
    },
    "shaohuai": {
        "name": "Shaohuai\u0003Zhang",
        "plus": [
            [
                "menglin",
                "Menglin Dong"
            ],
            [
                "haohan",
                "Haohan\u0003Zhang"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "2",
        "group": "Haohan\u0003Zhang, Iris Yip, Lap Tung, Menglin Dong, Ruyi Yan, Shaohuai\u0003Zhang, Waiwan Yip"
    },
    "yip": {
        "name": "Waiwan Yip",
        "plus": [
            [
                "tung",
                "Lap Tung"
            ],
            [
                "iris",
                "Iris Yip"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "2",
        "group": "Haohan\u0003Zhang, Iris Yip, Lap Tung, Menglin Dong, Ruyi Yan, Shaohuai\u0003Zhang, Waiwan Yip"
    },
    "clay": {
        "name": "Clay Lin",
        "plus": "none",
        "meal": "Summer Ratatouille Lasagna (vegan + gluten-free)",
        "table_number": "3",
        "group": "Clay Lin, Cy Zhang, Fango Lin, Luna Zhang, Vita Wang, Yutong Shi"
    },
    "cy": {
        "name": "Cy Zhang",
        "plus": [
            [
                "vita",
                "Vita Wang"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "3",
        "group": "Clay Lin, Cy Zhang, Fango Lin, Luna Zhang, Vita Wang, Yutong Shi"
    },
    "fango": {
        "name": "Fango Lin",
        "plus": [
            [
                "luna",
                "Luna Zhang"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "3",
        "group": "Clay Lin, Cy Zhang, Fango Lin, Luna Zhang, Vita Wang, Yutong Shi"
    },
    "luna": {
        "name": "Luna Zhang",
        "plus": [
            [
                "fango",
                "Fango Lin"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "3",
        "group": "Clay Lin, Cy Zhang, Fango Lin, Luna Zhang, Vita Wang, Yutong Shi"
    },
    "vita": {
        "name": "Vita Wang",
        "plus": [
            [
                "cy",
                "Cy Zhang"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "3",
        "group": "Clay Lin, Cy Zhang, Fango Lin, Luna Zhang, Vita Wang, Yutong Shi"
    },
    "yutong": {
        "name": "Yutong Shi",
        "plus": "none",
        "meal": "Miso-baked Cod",
        "table_number": "3",
        "group": "Clay Lin, Cy Zhang, Fango Lin, Luna Zhang, Vita Wang, Yutong Shi"
    },
    "chenlu": {
        "name": "Chenlu Wang",
        "plus": [
            [
                "ziyu",
                "Ziyu Chen"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "4",
        "group": "Chenlu Wang, Felice Mancini, Meichun Cai, Peitong Chen, Youngmin Cho, Zhaodi Wang, Ziyu Chen"
    },
    "felice": {
        "name": "Felice Mancini",
        "plus": [
            [
                "veronica",
                "Peitong Chen"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "4",
        "group": "Chenlu Wang, Felice Mancini, Meichun Cai, Peitong Chen, Youngmin Cho, Zhaodi Wang, Ziyu Chen"
    },
    "meichun": {
        "name": "Meichun Cai",
        "plus": "none",
        "meal": "Miso-baked Cod",
        "table_number": "4",
        "group": "Chenlu Wang, Felice Mancini, Meichun Cai, Peitong Chen, Youngmin Cho, Zhaodi Wang, Ziyu Chen"
    },
    "veronica": {
        "name": "Peitong Chen",
        "plus": [
            [
                "felice",
                "Felice Mancini"
            ]
        ],
        "meal": "Summer Ratatouille Lasagna (vegan + gluten-free)",
        "table_number": "4",
        "group": "Chenlu Wang, Felice Mancini, Meichun Cai, Peitong Chen, Youngmin Cho, Zhaodi Wang, Ziyu Chen"
    },
    "jeffrey": {
        "name": "Youngmin Cho",
        "plus": [
            [
                "zhaodi",
                "Zhaodi Wang"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "4",
        "group": "Chenlu Wang, Felice Mancini, Meichun Cai, Peitong Chen, Youngmin Cho, Zhaodi Wang, Ziyu Chen"
    },
    "zhaodi": {
        "name": "Zhaodi Wang",
        "plus": [
            [
                "jeffrey",
                "Youngmin Cho"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "4",
        "group": "Chenlu Wang, Felice Mancini, Meichun Cai, Peitong Chen, Youngmin Cho, Zhaodi Wang, Ziyu Chen"
    },
    "ziyu": {
        "name": "Ziyu Chen",
        "plus": [
            [
                "chenlu",
                "Chenlu Wang"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "4",
        "group": "Chenlu Wang, Felice Mancini, Meichun Cai, Peitong Chen, Youngmin Cho, Zhaodi Wang, Ziyu Chen"
    },
    "adeline": {
        "name": "Adeline Wang",
        "plus": [
            [
                "yiqi",
                "Yiqi Zhao"
            ],
            [
                "gavin",
                "Gavin Wang"
            ],
            [
                "aurora",
                "Aurora Wang"
            ]
        ],
        "meal": "Kid's Meal",
        "table_number": "5",
        "group": "Adeline Wang, Aurora Wang, Frank Chen, Gavin Wang, Jacqueline Zhu, Yiqi Zhao"
    },
    "aurora": {
        "name": "Aurora Wang",
        "plus": [
            [
                "yiqi",
                "Yiqi Zhao"
            ],
            [
                "gavin",
                "Gavin Wang"
            ],
            [
                "adeline",
                "Adeline Wang"
            ]
        ],
        "meal": "Kid's Meal",
        "table_number": "5",
        "group": "Adeline Wang, Aurora Wang, Frank Chen, Gavin Wang, Jacqueline Zhu, Yiqi Zhao"
    },
    "frank": {
        "name": "Frank Chen",
        "plus": [
            [
                "jacqueline",
                "Jacqueline Zhu"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "5",
        "group": "Adeline Wang, Aurora Wang, Frank Chen, Gavin Wang, Jacqueline Zhu, Yiqi Zhao"
    },
    "gavin": {
        "name": "Gavin Wang",
        "plus": [
            [
                "yiqi",
                "Yiqi Zhao"
            ],
            [
                "adeline",
                "Adeline Wang"
            ],
            [
                "aurora",
                "Aurora Wang"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "5",
        "group": "Adeline Wang, Aurora Wang, Frank Chen, Gavin Wang, Jacqueline Zhu, Yiqi Zhao"
    },
    "jacqueline": {
        "name": "Jacqueline Zhu",
        "plus": [
            [
                "frank",
                "Frank Chen"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "5",
        "group": "Adeline Wang, Aurora Wang, Frank Chen, Gavin Wang, Jacqueline Zhu, Yiqi Zhao"
    },
    "yiqi": {
        "name": "Yiqi Zhao",
        "plus": [
            [
                "gavin",
                "Gavin Wang"
            ],
            [
                "adeline",
                "Adeline Wang"
            ],
            [
                "aurora",
                "Aurora Wang"
            ],
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "5",
        "group": "Adeline Wang, Aurora Wang, Frank Chen, Gavin Wang, Jacqueline Zhu, Yiqi Zhao"
    },
    "dakuo": {
        "name": "Dakuo Wang",
        "plus": [
            [
                "yisi",
                "Yisi Sang"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "iyang": {
        "name": "I-Yang Huang",
        "plus": [
            [
                "tiange",
                "Tiange Wang"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "jazz": {
        "name": "Jazzmynn Hong",
        "plus": [
            [
                "jingfei",
                "Jingfei Hu"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "jingfei": {
        "name": "Jingfei Hu",
        "plus": [
            [
                "jazz",
                "Jazzmynn Hong"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "shiyi": {
        "name": "Shiyi Peng",
        "plus": "none",
        "meal": "NY Strip (gluten-free)",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "tiange": {
        "name": "Tiange Wang",
        "plus": [
            [
                "iyang",
                "I-Yang Huang"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "wanwan": {
        "name": "Wanwan Fei",
        "plus": [
            [
                "zishi",
                "Zishi Liu"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "yisi": {
        "name": "Yisi Sang",
        "plus": [
            [
                "dakuo",
                "Dakuo Wang"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "zishi": {
        "name": "Zishi Liu",
        "plus": [
            [
                "wanwan",
                "Wanwan Fei"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "6",
        "group": "Dakuo Wang, I-Yang Huang, Jazzmynn Hong, Jingfei Hu, Shiyi Peng, Tiange Wang, Wanwan Fei, Yisi Sang, Zishi Liu"
    },
    "asterios": {
        "name": "Asterios Tsiourvas",
        "plus": [
            [
                "kat",
                "Kat Labrou"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "tsai": {
        "name": "Dr. Daniel Tsai",
        "plus": "none",
        "meal": "Miso-baked Cod",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "demircan": {
        "name": "Demircan Tas",
        "plus": [
            [
                "serin",
                "Serin Alpokay Tas "
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "dimitrios": {
        "name": "Dimitrios Chatzinikolis",
        "plus": [
            [
                "sara",
                "Sara Tang"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "kat": {
        "name": "Kat Labrou",
        "plus": [
            [
                "asterios",
                "Asterios Tsiourvas"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "serin": {
        "name": "Serin Alpokay Tas ",
        "plus": [
            [
                "demircan",
                "Demircan Tas"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "takehiko": {
        "name": "Professor Takehiko Nagakura",
        "plus": [
            [
                "tomoko",
                "Tomoko Okamura-Nagakura"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "tomoko": {
        "name": "Mrs. Tomoko Okamura-Nagakura",
        "plus": [
            [
                "takehiko",
                "Takehiko Nagakura"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "wenzhe": {
        "name": "Wenzhe Peng",
        "plus": [
            [
                "yu",
                "Yu Zheng"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "yu": {
        "name": "Yu Zheng",
        "plus": [
            [
                "wenzhe",
                "Wenzhe Peng"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "7",
        "group": "Asterios Tsiourvas, Daniel Tsai, Demircan Tas, Dimitrios Chatzinikolis, Kat Labrou, Serin Alpokay Tas , Takehiko Nagakura, Tomoko Okamura-Nagakura, Wenzhe Peng, Yu Zheng"
    },
    "claire": {
        "name": "Claire Li",
        "plus": "none",
        "meal": "Summer Ratatouille Lasagna (vegan + gluten-free)",
        "table_number": "8",
        "group": "Claire Li, Esther Tu, Jessie Qian, Sara Tang, Victor Cao"
    },
    "esther": {
        "name": "Esther Tu",
        "plus": [
            [
                "esther",
                "Esther Tu"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "8",
        "group": "Claire Li, Esther Tu, Jessie Qian, Sara Tang, Victor Cao"
    },
    "jessie": {
        "name": "Jessie Qian",
        "plus": "none",
        "meal": "NY Strip (gluten-free)",
        "table_number": "8",
        "group": "Claire Li, Esther Tu, Jessie Qian, Sara Tang, Victor Cao"
    },
    "sara": {
        "name": "Sara Tang",
        "plus": [
            [
                "dimitrios",
                "Dimitrios Chatzinikolis"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "8",
        "group": "Claire Li, Esther Tu, Jessie Qian, Sara Tang, Victor Cao"
    },
    "victor": {
        "name": "Victor Cao",
        "plus": [
            [
                "esther",
                "Esther Tu"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "8",
        "group": "Claire Li, Esther Tu, Jessie Qian, Sara Tang, Victor Cao"
    },
    "kylecroft": {
        "name": "Kyle Croft",
        "plus": [
            [
                "xiezhile",
                "Zhile Xie"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "9",
        "group": "Kyle Croft, Nicole Mo, Sheng Cao, Simon Pun, Yi Xu, Zhekun Xiong, Zhile Xie"
    },
    "nicole": {
        "name": "Nicole Mo",
        "plus": [
            [
                "simon",
                "Simon Pun"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "9",
        "group": "Kyle Croft, Nicole Mo, Sheng Cao, Simon Pun, Yi Xu, Zhekun Xiong, Zhile Xie"
    },
    "caosheng": {
        "name": "Sheng Cao",
        "plus": [
            [
                "xuyi",
                "Yi Xu"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "9",
        "group": "Kyle Croft, Nicole Mo, Sheng Cao, Simon Pun, Yi Xu, Zhekun Xiong, Zhile Xie"
    },
    "simon": {
        "name": "Simon Pun",
        "plus": [
            [
                "nicole",
                "Nicole Mo"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "9",
        "group": "Kyle Croft, Nicole Mo, Sheng Cao, Simon Pun, Yi Xu, Zhekun Xiong, Zhile Xie"
    },
    "xuyi": {
        "name": "Yi Xu",
        "plus": [
            [
                "caosheng",
                "Sheng Cao"
            ]
        ],
        "meal": "NY Strip (gluten-free)",
        "table_number": "9",
        "group": "Kyle Croft, Nicole Mo, Sheng Cao, Simon Pun, Yi Xu, Zhekun Xiong, Zhile Xie"
    },
    "zhekun": {
        "name": "Zhekun Xiong",
        "plus": "none",
        "meal": "NY Strip (gluten-free)",
        "table_number": "9",
        "group": "Kyle Croft, Nicole Mo, Sheng Cao, Simon Pun, Yi Xu, Zhekun Xiong, Zhile Xie"
    },
    "xiezhile": {
        "name": "Zhile Xie",
        "plus": [
            [
                "kylecroft",
                "Kyle Croft"
            ]
        ],
        "meal": "Miso-baked Cod",
        "table_number": "9",
        "group": "Kyle Croft, Nicole Mo, Sheng Cao, Simon Pun, Yi Xu, Zhekun Xiong, Zhile Xie"
    }
}

//
//var json = {},
//    groups = [[], [], [], [], [], [], [], [], [], [], []],
//    themeal = d3.scaleOrdinal()
//    .domain(["Cod", "NY Strip", "Ratatouille", "Kids"])
//    .range(["Miso-baked Cod", "NY Strip (gluten-free)", "Summer Ratatouille Lasagna (vegan + gluten-free)", "Kid's Meal"])
//
//
//d3.csv("./js/data.csv", function (data) {
//
//    data.forEach(function (d) {
//        groups[d.table].push(d.full_name);
//    })
//
//    data.forEach(function (d) {
//
//        let plus_one = [];
//        if (d.plus_one[0] !== undefined) {
//            d.plus_one.split(", ").forEach(function (p) {
//                let pp = data.filter(function (a) {
//                    return a.full_name == p;
//                })
//
//                pp.forEach(function (a) {
//                    plus_one.push([a.id, a.full_name])
//                })
//            })
//        } else {
//            plus_one = "none";
//        }
//
//        json[d.id] = {
//            name: d.full_name,
//            plus: plus_one,
//            allergy: d.allergy,
//            meal: themeal(d.meal),
//            table_number: d.table,
//            group: groups[d.table].join(", ")
//        }
//        
//    })
//
//    console.log(json);
//
//});

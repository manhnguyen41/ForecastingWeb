import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HeadLine from "./component/HeadLine/HeadLine";
import FilterBox from "./component/FilterBox/FilterBox";
import Content from "./component/Content/Content";
import "./App.css";

// const stringToDate = (date: string) => {
//   const year = parseInt(date.substring(0, 4));
//   const month = parseInt(date.substring(4, 6)) - 1;
//   const day = parseInt(date.substring(6, 8));

//   // Create a Date object
//   const dateObj = new Date(year, month, day);

//   return dateObj;
// };

const App: React.FC = () => {
  const [stormData] = useState<any>({
    "2023": {
      "2305_DOKSURI": {
        "20230728": {
          images: [
            "./././images/2023/2305_DOKSURI/20230728\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230728\\forecast.png",
          ],
          mse_out: 1.5853169384847734,
          mse_hres: 8.590641451129873,
        },
        "20230726": {
          images: [
            "./././images/2023/2305_DOKSURI/20230726\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230726\\forecast.png",
          ],
          mse_out: 4.920800317652167,
          mse_hres: 34.25524052726202,
        },
        "20230725": {
          images: [
            "./././images/2023/2305_DOKSURI/20230725\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230725\\forecast.png",
          ],
          mse_out: 1.1944781146273509,
          mse_hres: 64.86501805015226,
        },
        "20230727": {
          images: [
            "./././images/2023/2305_DOKSURI/20230727\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230727\\forecast.png",
          ],
          mse_out: 1.1316429545001698,
          mse_hres: 16.921879919875803,
        },
        "20230722": {
          images: [
            "./././images/2023/2305_DOKSURI/20230722\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230722\\forecast.png",
          ],
          mse_out: 2.2480940681195305,
          mse_hres: 7.232974320071439,
        },
        "20230723": {
          images: [
            "./././images/2023/2305_DOKSURI/20230723\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230723\\forecast.png",
          ],
          mse_out: 14.961086877402414,
          mse_hres: 20.18000820967742,
        },
        "20230729": {
          images: [
            "./././images/2023/2305_DOKSURI/20230729\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230729\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20230721": {
          images: [
            "./././images/2023/2305_DOKSURI/20230721\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230721\\forecast.png",
          ],
          mse_out: 1.1861925741890924,
          mse_hres: 2.4344740396280007,
        },
        "20230724": {
          images: [
            "./././images/2023/2305_DOKSURI/20230724\\tracking.png",
            "./././images/2023/2305_DOKSURI/20230724\\forecast.png",
          ],
          mse_out: 2.9774380127775166,
          mse_hres: 42.325249906607844,
        },
      },
      "2309_SAOLA": {
        "20230829": {
          images: [
            "./././images/2023/2309_SAOLA/20230829\\tracking.png",
            "./././images/2023/2309_SAOLA/20230829\\forecast.png",
          ],
          mse_out: 12.3177430190505,
          mse_hres: 39.34169468264565,
        },
        "20230825": {
          images: [
            "./././images/2023/2309_SAOLA/20230825\\tracking.png",
            "./././images/2023/2309_SAOLA/20230825\\forecast.png",
          ],
          mse_out: 6.692330066331453,
          mse_hres: 8.603783405961897,
        },
        "20230831": {
          images: [
            "./././images/2023/2309_SAOLA/20230831\\tracking.png",
            "./././images/2023/2309_SAOLA/20230831\\forecast.png",
          ],
          mse_out: 13.252046486454105,
          mse_hres: 8.90915953119525,
        },
        "20230901": {
          images: [
            "./././images/2023/2309_SAOLA/20230901\\tracking.png",
            "./././images/2023/2309_SAOLA/20230901\\forecast.png",
          ],
          mse_out: 14.510497814617224,
          mse_hres: 11.084898753973615,
        },
        "20230830": {
          images: [
            "./././images/2023/2309_SAOLA/20230830\\tracking.png",
            "./././images/2023/2309_SAOLA/20230830\\forecast.png",
          ],
          mse_out: 15.727296302297677,
          mse_hres: 21.951969707225516,
        },
        "20230828": {
          images: [
            "./././images/2023/2309_SAOLA/20230828\\tracking.png",
            "./././images/2023/2309_SAOLA/20230828\\forecast.png",
          ],
          mse_out: 1.6531095407084497,
          mse_hres: 29.184348364518097,
        },
        "20230902": {
          images: [
            "./././images/2023/2309_SAOLA/20230902\\tracking.png",
            "./././images/2023/2309_SAOLA/20230902\\forecast.png",
          ],
          mse_out: 7.806773642808223,
          mse_hres: 29.324642566316978,
        },
        "20230827": {
          images: [
            "./././images/2023/2309_SAOLA/20230827\\tracking.png",
            "./././images/2023/2309_SAOLA/20230827\\forecast.png",
          ],
          mse_out: 5.2028808756909894,
          mse_hres: 37.46966824278091,
        },
        "20230826": {
          images: [
            "./././images/2023/2309_SAOLA/20230826\\tracking.png",
            "./././images/2023/2309_SAOLA/20230826\\forecast.png",
          ],
          mse_out: 2.722111397941523,
          mse_hres: 38.53673363517792,
        },
      },
      "2314_KOINU": {
        "20231005": {
          images: [
            "./././images/2023/2314_KOINU/20231005\\tracking.png",
            "./././images/2023/2314_KOINU/20231005\\forecast.png",
          ],
          mse_out: 7.438621475006255,
          mse_hres: 17.17160820692116,
        },
        "20231007": {
          images: [
            "./././images/2023/2314_KOINU/20231007\\tracking.png",
            "./././images/2023/2314_KOINU/20231007\\forecast.png",
          ],
          mse_out: 33.957566305015845,
          mse_hres: 36.10882235203069,
        },
        "20231002": {
          images: [
            "./././images/2023/2314_KOINU/20231002\\tracking.png",
            "./././images/2023/2314_KOINU/20231002\\forecast.png",
          ],
          mse_out: 5.982438473330099,
          mse_hres: 22.357531570567524,
        },
        "20231001": {
          images: [
            "./././images/2023/2314_KOINU/20231001\\tracking.png",
            "./././images/2023/2314_KOINU/20231001\\forecast.png",
          ],
          mse_out: 13.965659693098399,
          mse_hres: 25.720546388696192,
        },
        "20230930": {
          images: [
            "./././images/2023/2314_KOINU/20230930\\tracking.png",
            "./././images/2023/2314_KOINU/20230930\\forecast.png",
          ],
          mse_out: 1.2637728594957616,
          mse_hres: 3.9396615132041397,
        },
        "20231003": {
          images: [
            "./././images/2023/2314_KOINU/20231003\\tracking.png",
            "./././images/2023/2314_KOINU/20231003\\forecast.png",
          ],
          mse_out: 1.5362851319364694,
          mse_hres: 26.263139222855642,
        },
        "20231006": {
          images: [
            "./././images/2023/2314_KOINU/20231006\\tracking.png",
            "./././images/2023/2314_KOINU/20231006\\forecast.png",
          ],
          mse_out: 33.17093700474321,
          mse_hres: 59.43097137534984,
        },
        "20231009": {
          images: [
            "./././images/2023/2314_KOINU/20231009\\tracking.png",
            "./././images/2023/2314_KOINU/20231009\\forecast.png",
          ],
          mse_out: 9.162639210318982,
          mse_hres: 105.55272326711025,
        },
        "20231008": {
          images: [
            "./././images/2023/2314_KOINU/20231008\\tracking.png",
            "./././images/2023/2314_KOINU/20231008\\forecast.png",
          ],
          mse_out: 21.093116139169712,
          mse_hres: 29.26973458763347,
        },
        "20231004": {
          images: [
            "./././images/2023/2314_KOINU/20231004\\tracking.png",
            "./././images/2023/2314_KOINU/20231004\\forecast.png",
          ],
          mse_out: 1.1857962617981603,
          mse_hres: 12.710259003865051,
        },
      },
    },
    "2021": {
      "2107_CEMPAKA": {
        "20210719": {
          images: [
            "./././images/2021/2107_CEMPAKA/20210719\\tracking.png",
            "./././images/2021/2107_CEMPAKA/20210719\\forecast.png",
          ],
          mse_out: 17.96718894615056,
          mse_hres: 45.95001092977215,
        },
        "20210721": {
          images: [
            "./././images/2021/2107_CEMPAKA/20210721\\tracking.png",
            "./././images/2021/2107_CEMPAKA/20210721\\forecast.png",
          ],
          mse_out: 0.6398364447836369,
          mse_hres: 23.233437208127377,
        },
        "20210720": {
          images: [
            "./././images/2021/2107_CEMPAKA/20210720\\tracking.png",
            "./././images/2021/2107_CEMPAKA/20210720\\forecast.png",
          ],
          mse_out: 20.66138758605935,
          mse_hres: 36.84598896235532,
        },
      },
      "2115_DIANMU": {
        "20210923": {
          images: [
            "./././images/2021/2115_DIANMU/20210923\\tracking.png",
            "./././images/2021/2115_DIANMU/20210923\\forecast.png",
          ],
          mse_out: 6.553494646978259,
          mse_hres: 4.6945000659565626,
        },
      },
      "2117_LIONROCK": {
        "20211010": {
          images: [
            "./././images/2021/2117_LIONROCK/20211010\\tracking.png",
            "./././images/2021/2117_LIONROCK/20211010\\forecast.png",
          ],
          mse_out: 9.990759003402353,
          mse_hres: 0.04192665760000011,
        },
        "20211008": {
          images: [
            "./././images/2021/2117_LIONROCK/20211008\\tracking.png",
            "./././images/2021/2117_LIONROCK/20211008\\forecast.png",
          ],
          mse_out: 6.119638956174068,
          mse_hres: 0.2524208662173602,
        },
        "20211009": {
          images: [
            "./././images/2021/2117_LIONROCK/20211009\\tracking.png",
            "./././images/2021/2117_LIONROCK/20211009\\forecast.png",
          ],
          mse_out: 5.978858281190831,
          mse_hres: 0.41811740949966014,
        },
      },
      "2103_CHOIWAN": {
        "20210604": {
          images: [
            "./././images/2021/2103_CHOIWAN/20210604\\tracking.png",
            "./././images/2021/2103_CHOIWAN/20210604\\forecast.png",
          ],
          mse_out: 0.2751830976310507,
          mse_hres: 1.2357766454612102,
        },
        "20210603": {
          images: [
            "./././images/2021/2103_CHOIWAN/20210603\\tracking.png",
            "./././images/2021/2103_CHOIWAN/20210603\\forecast.png",
          ],
          mse_out: 0.16546016798794488,
          mse_hres: 6.50871941409896,
        },
        "20210605": {
          images: [
            "./././images/2021/2103_CHOIWAN/20210605\\tracking.png",
            "./././images/2021/2103_CHOIWAN/20210605\\forecast.png",
          ],
          mse_out: 1.0544987462276219,
          mse_hres: 0.6258787656250016,
        },
      },
      "2103_CHOI-WAN": {
        "20210604": {
          images: [
            "./././images/2021/2103_CHOI-WAN/20210604\\tracking.png",
            "./././images/2021/2103_CHOI-WAN/20210604\\forecast.png",
          ],
          mse_out: 0.2751830976310507,
          mse_hres: 1.2357766454612102,
        },
        "20210603": {
          images: [
            "./././images/2021/2103_CHOI-WAN/20210603\\tracking.png",
            "./././images/2021/2103_CHOI-WAN/20210603\\forecast.png",
          ],
          mse_out: 0.16546016798794488,
          mse_hres: 6.50871941409896,
        },
        "20210605": {
          images: [
            "./././images/2021/2103_CHOI-WAN/20210605\\tracking.png",
            "./././images/2021/2103_CHOI-WAN/20210605\\forecast.png",
          ],
          mse_out: 1.0544987462276219,
          mse_hres: 0.6258787656250016,
        },
      },
      "2104_KOGUMA": {
        "20210613": {
          images: [
            "./././images/2021/2104_KOGUMA/20210613\\tracking.png",
            "./././images/2021/2104_KOGUMA/20210613\\forecast.png",
          ],
          mse_out: 5.177081344038986,
          mse_hres: 9.0281619961,
        },
        "20210612": {
          images: [
            "./././images/2021/2104_KOGUMA/20210612\\tracking.png",
            "./././images/2021/2104_KOGUMA/20210612\\forecast.png",
          ],
          mse_out: 1.7254172047238392,
          mse_hres: 1.45870686624781,
        },
      },
      "2122_RAI": {
        "20211215": {
          images: [
            "./././images/2021/2122_RAI/20211215\\tracking.png",
            "./././images/2021/2122_RAI/20211215\\forecast.png",
          ],
          mse_out: 11.97522368081216,
          mse_hres: 85.0994580221329,
        },
        "20211220": {
          images: [
            "./././images/2021/2122_RAI/20211220\\tracking.png",
            "./././images/2021/2122_RAI/20211220\\forecast.png",
          ],
          mse_out: 13.993867970662807,
          mse_hres: 15.637752199525112,
        },
        "20211216": {
          images: [
            "./././images/2021/2122_RAI/20211216\\tracking.png",
            "./././images/2021/2122_RAI/20211216\\forecast.png",
          ],
          mse_out: 5.052780247138012,
          mse_hres: 58.51254887893249,
        },
        "20211219": {
          images: [
            "./././images/2021/2122_RAI/20211219\\tracking.png",
            "./././images/2021/2122_RAI/20211219\\forecast.png",
          ],
          mse_out: 18.549746640092145,
          mse_hres: 53.401396650746605,
        },
        "20211217": {
          images: [
            "./././images/2021/2122_RAI/20211217\\tracking.png",
            "./././images/2021/2122_RAI/20211217\\forecast.png",
          ],
          mse_out: 1.4632323162544143,
          mse_hres: 48.514586464804474,
        },
        "20211214": {
          images: [
            "./././images/2021/2122_RAI/20211214\\tracking.png",
            "./././images/2021/2122_RAI/20211214\\forecast.png",
          ],
          mse_out: 2.531362674631226,
          mse_hres: 36.63600134102531,
        },
        "20211218": {
          images: [
            "./././images/2021/2122_RAI/20211218\\tracking.png",
            "./././images/2021/2122_RAI/20211218\\forecast.png",
          ],
          mse_out: 3.028667521526422,
          mse_hres: 65.84720299816635,
        },
      },
      "2118_KOMPASU": {
        "20211009": {
          images: [
            "./././images/2021/2118_KOMPASU/20211009\\tracking.png",
            "./././images/2021/2118_KOMPASU/20211009\\forecast.png",
          ],
          mse_out: 18.825796205329226,
          mse_hres: 5.675127527650729,
        },
        "20211013": {
          images: [
            "./././images/2021/2118_KOMPASU/20211013\\tracking.png",
            "./././images/2021/2118_KOMPASU/20211013\\forecast.png",
          ],
          mse_out: 4.908573884363526,
          mse_hres: 1.3127220310839698,
        },
        "20211008": {
          images: [
            "./././images/2021/2118_KOMPASU/20211008\\tracking.png",
            "./././images/2021/2118_KOMPASU/20211008\\forecast.png",
          ],
          mse_out: 6.153139579124875,
          mse_hres: 3.15866089205641,
        },
        "20211011": {
          images: [
            "./././images/2021/2118_KOMPASU/20211011\\tracking.png",
            "./././images/2021/2118_KOMPASU/20211011\\forecast.png",
          ],
          mse_out: 3.6581764568770696,
          mse_hres: 3.8037025305509404,
        },
        "20211010": {
          images: [
            "./././images/2021/2118_KOMPASU/20211010\\tracking.png",
            "./././images/2021/2118_KOMPASU/20211010\\forecast.png",
          ],
          mse_out: 16.0337952359984,
          mse_hres: 3.319532656305769,
        },
        "20211012": {
          images: [
            "./././images/2021/2118_KOMPASU/20211012\\tracking.png",
            "./././images/2021/2118_KOMPASU/20211012\\forecast.png",
          ],
          mse_out: 11.185911436410816,
          mse_hres: 2.507706061568561,
        },
      },
      "2113_CONSON": {
        "20210909": {
          images: [
            "./././images/2021/2113_CONSON/20210909\\tracking.png",
            "./././images/2021/2113_CONSON/20210909\\forecast.png",
          ],
          mse_out: 1.1077027833840964,
          mse_hres: 5.612349202586451,
        },
        "20210911": {
          images: [
            "./././images/2021/2113_CONSON/20210911\\tracking.png",
            "./././images/2021/2113_CONSON/20210911\\forecast.png",
          ],
          mse_out: 1.8477218601671932,
          mse_hres: 6.253300434307332,
        },
        "20210908": {
          images: [
            "./././images/2021/2113_CONSON/20210908\\tracking.png",
            "./././images/2021/2113_CONSON/20210908\\forecast.png",
          ],
          mse_out: 0.6549586998286465,
          mse_hres: 3.03875317425448,
        },
        "20210910": {
          images: [
            "./././images/2021/2113_CONSON/20210910\\tracking.png",
            "./././images/2021/2113_CONSON/20210910\\forecast.png",
          ],
          mse_out: 1.353364536299137,
          mse_hres: 9.169671050337277,
        },
      },
    },
    "2022": {
      "2209_MA-ON": {
        "20220823": {
          images: [
            "./././images/2022/2209_MA-ON/20220823\\tracking.png",
            "./././images/2022/2209_MA-ON/20220823\\forecast.png",
          ],
          mse_out: 10.054737462272097,
          mse_hres: 7.606932771754569,
        },
        "20220824": {
          images: [
            "./././images/2022/2209_MA-ON/20220824\\tracking.png",
            "./././images/2022/2209_MA-ON/20220824\\forecast.png",
          ],
          mse_out: 3.704365644574635,
          mse_hres: 11.624775102998083,
        },
        "20220822": {
          images: [
            "./././images/2022/2209_MA-ON/20220822\\tracking.png",
            "./././images/2022/2209_MA-ON/20220822\\forecast.png",
          ],
          mse_out: 2.171645835663684,
          mse_hres: 1.2875118922898499,
        },
        "20220825": {
          images: [
            "./././images/2022/2209_MA-ON/20220825\\tracking.png",
            "./././images/2022/2209_MA-ON/20220825\\forecast.png",
          ],
          mse_out: 5.141640530243932,
          mse_hres: 10.888968967433627,
        },
      },
      "2203_CHABA": {
        "20220702": {
          images: [
            "./././images/2022/2203_CHABA/20220702\\tracking.png",
            "./././images/2022/2203_CHABA/20220702\\forecast.png",
          ],
          mse_out: 4.522356598495856,
          mse_hres: 13.634265957580661,
        },
        "20220630": {
          images: [
            "./././images/2022/2203_CHABA/20220630\\tracking.png",
            "./././images/2022/2203_CHABA/20220630\\forecast.png",
          ],
          mse_out: 1.6153333418329219,
          mse_hres: 6.511318822390412,
        },
        "20220701": {
          images: [
            "./././images/2022/2203_CHABA/20220701\\tracking.png",
            "./././images/2022/2203_CHABA/20220701\\forecast.png",
          ],
          mse_out: 5.939108120688472,
          mse_hres: 24.783752911054062,
        },
      },
    },
    "2019": {
      "1907_WIPHA": {
        "20190801": {
          images: [
            "./././images/2019/1907_WIPHA/20190801\\tracking.png",
            "./././images/2019/1907_WIPHA/20190801\\forecast.png",
          ],
          mse_out: 1.2301983306878437,
          mse_hres: 1.39126416113876,
        },
        "20190803": {
          images: [
            "./././images/2019/1907_WIPHA/20190803\\tracking.png",
            "./././images/2019/1907_WIPHA/20190803\\forecast.png",
          ],
          mse_out: 6.611898716153672,
          mse_hres: 9.474001235336502,
        },
        "20190731": {
          images: [
            "./././images/2019/1907_WIPHA/20190731\\tracking.png",
            "./././images/2019/1907_WIPHA/20190731\\forecast.png",
          ],
          mse_out: 5.694819929277494,
          mse_hres: 0.8843674841498403,
        },
        "20190802": {
          images: [
            "./././images/2019/1907_WIPHA/20190802\\tracking.png",
            "./././images/2019/1907_WIPHA/20190802\\forecast.png",
          ],
          mse_out: 2.717782042383181,
          mse_hres: 0.6939613818596998,
        },
      },
      "1928_KAMMURI": {
        "20191205": {
          images: [
            "./././images/2019/1928_KAMMURI/20191205\\tracking.png",
            "./././images/2019/1928_KAMMURI/20191205\\forecast.png",
          ],
          mse_out: 2.185807028499383,
          mse_hres: 0.2633755146486109,
        },
        "20191204": {
          images: [
            "./././images/2019/1928_KAMMURI/20191204\\tracking.png",
            "./././images/2019/1928_KAMMURI/20191204\\forecast.png",
          ],
          mse_out: 1.6791066381162705,
          mse_hres: 1.9967294922932797,
        },
        "20191202": {
          images: [
            "./././images/2019/1928_KAMMURI/20191202\\tracking.png",
            "./././images/2019/1928_KAMMURI/20191202\\forecast.png",
          ],
          mse_out: 4.845988836302672,
          mse_hres: 1.2321448857793196,
        },
        "20191201": {
          images: [
            "./././images/2019/1928_KAMMURI/20191201\\tracking.png",
            "./././images/2019/1928_KAMMURI/20191201\\forecast.png",
          ],
          mse_out: 7.4043001925418155,
          mse_hres: 33.53011477215525,
        },
        "20191203": {
          images: [
            "./././images/2019/1928_KAMMURI/20191203\\tracking.png",
            "./././images/2019/1928_KAMMURI/20191203\\forecast.png",
          ],
          mse_out: 2.0891842099343316,
          mse_hres: 6.39143401105094,
        },
        "20191129": {
          images: [
            "./././images/2019/1928_KAMMURI/20191129\\tracking.png",
            "./././images/2019/1928_KAMMURI/20191129\\forecast.png",
          ],
          mse_out: 5.717100425163217,
          mse_hres: 32.930042033461014,
        },
        "20191130": {
          images: [
            "./././images/2019/1928_KAMMURI/20191130\\tracking.png",
            "./././images/2019/1928_KAMMURI/20191130\\forecast.png",
          ],
          mse_out: 12.83713638867103,
          mse_hres: 21.068568029595127,
        },
      },
      "1924_NAKRI": {
        "20191106": {
          images: [
            "./././images/2019/1924_NAKRI/20191106\\tracking.png",
            "./././images/2019/1924_NAKRI/20191106\\forecast.png",
          ],
          mse_out: 2.612104587212854,
          mse_hres: 1.3924348146651595,
        },
        "20191107": {
          images: [
            "./././images/2019/1924_NAKRI/20191107\\tracking.png",
            "./././images/2019/1924_NAKRI/20191107\\forecast.png",
          ],
          mse_out: 7.2844145187826665,
          mse_hres: 4.171665745888022,
        },
        "20191109": {
          images: [
            "./././images/2019/1924_NAKRI/20191109\\tracking.png",
            "./././images/2019/1924_NAKRI/20191109\\forecast.png",
          ],
          mse_out: 26.30969329136129,
          mse_hres: 3.683125776880489,
        },
        "20191108": {
          images: [
            "./././images/2019/1924_NAKRI/20191108\\tracking.png",
            "./././images/2019/1924_NAKRI/20191108\\forecast.png",
          ],
          mse_out: 20.001494262304522,
          mse_hres: 5.912225766048171,
        },
        "20191105": {
          images: [
            "./././images/2019/1924_NAKRI/20191105\\tracking.png",
            "./././images/2019/1924_NAKRI/20191105\\forecast.png",
          ],
          mse_out: 7.305555328484598,
          mse_hres: 1.0107521383002491,
        },
        "20191110": {
          images: [
            "./././images/2019/1924_NAKRI/20191110\\tracking.png",
            "./././images/2019/1924_NAKRI/20191110\\forecast.png",
          ],
          mse_out: 1.7401885306630454,
          mse_hres: 0.3510570998052814,
        },
      },
      "1929_PHANFONE": {
        "20191227": {
          images: [
            "./././images/2019/1929_PHANFONE/20191227\\tracking.png",
            "./././images/2019/1929_PHANFONE/20191227\\forecast.png",
          ],
          mse_out: 1.1782571006123221,
          mse_hres: 1.7751958077219525,
        },
        "20191224": {
          images: [
            "./././images/2019/1929_PHANFONE/20191224\\tracking.png",
            "./././images/2019/1929_PHANFONE/20191224\\forecast.png",
          ],
          mse_out: 5.448061855530134,
          mse_hres: 35.14033343806772,
        },
        "20191226": {
          images: [
            "./././images/2019/1929_PHANFONE/20191226\\tracking.png",
            "./././images/2019/1929_PHANFONE/20191226\\forecast.png",
          ],
          mse_out: 6.004583256354245,
          mse_hres: 10.131143067311738,
        },
        "20191225": {
          images: [
            "./././images/2019/1929_PHANFONE/20191225\\tracking.png",
            "./././images/2019/1929_PHANFONE/20191225\\forecast.png",
          ],
          mse_out: 4.693382670535732,
          mse_hres: 7.1638320227961,
        },
      },
      "1904_MUN": {
        "20190703": {
          images: [
            "./././images/2019/1904_MUN/20190703\\tracking.png",
            "./././images/2019/1904_MUN/20190703\\forecast.png",
          ],
          mse_out: 1.2673328764875742,
          mse_hres: 0.7891518606173695,
        },
        "20190704": {
          images: [
            "./././images/2019/1904_MUN/20190704\\tracking.png",
            "./././images/2019/1904_MUN/20190704\\forecast.png",
          ],
          mse_out: 5.285935000378038,
          mse_hres: 1.1396074905759974,
        },
      },
      "1901_PABUK": {
        "20190104": {
          images: [
            "./././images/2019/1901_PABUK/20190104\\tracking.png",
            "./././images/2019/1901_PABUK/20190104\\forecast.png",
          ],
          mse_out: 4.10576162725387,
          mse_hres: 0.29523817091347243,
        },
        "20190101": {
          images: [
            "./././images/2019/1901_PABUK/20190101\\tracking.png",
            "./././images/2019/1901_PABUK/20190101\\forecast.png",
          ],
          mse_out: 8.119693335495345,
          mse_hres: 3.1675000929994384,
        },
        "20190103": {
          images: [
            "./././images/2019/1901_PABUK/20190103\\tracking.png",
            "./././images/2019/1901_PABUK/20190103\\forecast.png",
          ],
          mse_out: 6.0627087408573725,
          mse_hres: 0.9969639692233203,
        },
        "20190102": {
          images: [
            "./././images/2019/1901_PABUK/20190102\\tracking.png",
            "./././images/2019/1901_PABUK/20190102\\forecast.png",
          ],
          mse_out: 10.747247419927522,
          mse_hres: 2.423638461695439,
        },
      },
      "1912_PODUL": {
        "20190830": {
          images: [
            "./././images/2019/1912_PODUL/20190830\\tracking.png",
            "./././images/2019/1912_PODUL/20190830\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20190828": {
          images: [
            "./././images/2019/1912_PODUL/20190828\\tracking.png",
            "./././images/2019/1912_PODUL/20190828\\forecast.png",
          ],
          mse_out: 0.7052628385483717,
          mse_hres: 0.11022614535003014,
        },
        "20190829": {
          images: [
            "./././images/2019/1912_PODUL/20190829\\tracking.png",
            "./././images/2019/1912_PODUL/20190829\\forecast.png",
          ],
          mse_out: 0.5478533995164393,
          mse_hres: 0.8307202259602496,
        },
      },
      "1914_KAJIKI": {
        "20190902": {
          images: [
            "./././images/2019/1914_KAJIKI/20190902\\tracking.png",
            "./././images/2019/1914_KAJIKI/20190902\\forecast.png",
          ],
          mse_out: 5.296774248355862,
          mse_hres: 5.457929450042889,
        },
        "20190903": {
          images: [
            "./././images/2019/1914_KAJIKI/20190903\\tracking.png",
            "./././images/2019/1914_KAJIKI/20190903\\forecast.png",
          ],
          mse_out: 8.317755880866704,
          mse_hres: 7.989065065296813,
        },
      },
      "1922_MATMO": {
        "20191030": {
          images: [
            "./././images/2019/1922_MATMO/20191030\\tracking.png",
            "./././images/2019/1922_MATMO/20191030\\forecast.png",
          ],
          mse_out: 5.279885449755191,
          mse_hres: 3.7760204933505706,
        },
        "20191031": {
          images: [
            "./././images/2019/1922_MATMO/20191031\\tracking.png",
            "./././images/2019/1922_MATMO/20191031\\forecast.png",
          ],
          mse_out: 34.32894506240736,
          mse_hres: 4.013537434542249,
        },
      },
    },
    "2020": {
      "2018_MOLAVE": {
        "20201027": {
          images: [
            "./././images/2020/2018_MOLAVE/20201027\\tracking.png",
            "./././images/2020/2018_MOLAVE/20201027\\forecast.png",
          ],
          mse_out: 2.3624517013292508,
          mse_hres: 21.073552979200002,
        },
        "20201024": {
          images: [
            "./././images/2020/2018_MOLAVE/20201024\\tracking.png",
            "./././images/2020/2018_MOLAVE/20201024\\forecast.png",
          ],
          mse_out: 1.3514424342357065,
          mse_hres: 7.216537414223218,
        },
        "20201025": {
          images: [
            "./././images/2020/2018_MOLAVE/20201025\\tracking.png",
            "./././images/2020/2018_MOLAVE/20201025\\forecast.png",
          ],
          mse_out: 4.859300826692892,
          mse_hres: 10.04396816171911,
        },
        "20201026": {
          images: [
            "./././images/2020/2018_MOLAVE/20201026\\tracking.png",
            "./././images/2020/2018_MOLAVE/20201026\\forecast.png",
          ],
          mse_out: 2.726595793068449,
          mse_hres: 9.099485306423977,
        },
        "20201028": {
          images: [
            "./././images/2020/2018_MOLAVE/20201028\\tracking.png",
            "./././images/2020/2018_MOLAVE/20201028\\forecast.png",
          ],
          mse_out: 7.331042271734579,
          mse_hres: 11.397065948850662,
        },
      },
      "2016_NANGKA": {
        "20201013": {
          images: [
            "./././images/2020/2016_NANGKA/20201013\\tracking.png",
            "./././images/2020/2016_NANGKA/20201013\\forecast.png",
          ],
          mse_out: 0.38779185292544927,
          mse_hres: 3.698225103077619,
        },
        "20201014": {
          images: [
            "./././images/2020/2016_NANGKA/20201014\\tracking.png",
            "./././images/2020/2016_NANGKA/20201014\\forecast.png",
          ],
          mse_out: 4.361242848314446,
          mse_hres: 4.27275258427025,
        },
        "20201012": {
          images: [
            "./././images/2020/2016_NANGKA/20201012\\tracking.png",
            "./././images/2020/2016_NANGKA/20201012\\forecast.png",
          ],
          mse_out: 1.3025406846739227,
          mse_hres: 1.5089280350438905,
        },
      },
      "2020_ATSANI": {
        "20201106": {
          images: [
            "./././images/2020/2020_ATSANI/20201106\\tracking.png",
            "./././images/2020/2020_ATSANI/20201106\\forecast.png",
          ],
          mse_out: 1.88675833313341,
          mse_hres: 4.1433217832509985,
        },
        "20201107": {
          images: [
            "./././images/2020/2020_ATSANI/20201107\\tracking.png",
            "./././images/2020/2020_ATSANI/20201107\\forecast.png",
          ],
          mse_out: 3.829508467651573,
          mse_hres: 13.123520569600004,
        },
        "20201105": {
          images: [
            "./././images/2020/2020_ATSANI/20201105\\tracking.png",
            "./././images/2020/2020_ATSANI/20201105\\forecast.png",
          ],
          mse_out: 12.234991299041253,
          mse_hres: 0.7469958115857399,
        },
        "20201103": {
          images: [
            "./././images/2020/2020_ATSANI/20201103\\tracking.png",
            "./././images/2020/2020_ATSANI/20201103\\forecast.png",
          ],
          mse_out: 2.4626172941860807,
          mse_hres: 0.7042679933500298,
        },
        "20201102": {
          images: [
            "./././images/2020/2020_ATSANI/20201102\\tracking.png",
            "./././images/2020/2020_ATSANI/20201102\\forecast.png",
          ],
          mse_out: 0.7521220665050843,
          mse_hres: 1.0644137932390638,
        },
        "20201104": {
          images: [
            "./././images/2020/2020_ATSANI/20201104\\tracking.png",
            "./././images/2020/2020_ATSANI/20201104\\forecast.png",
          ],
          mse_out: 46.96980260539616,
          mse_hres: 0.3776171627706399,
        },
        "20201101": {
          images: [
            "./././images/2020/2020_ATSANI/20201101\\tracking.png",
            "./././images/2020/2020_ATSANI/20201101\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
      },
      "2023_KROVANH": {
        "20201220": {
          images: [
            "./././images/2020/2023_KROVANH/20201220\\tracking.png",
            "./././images/2020/2023_KROVANH/20201220\\forecast.png",
          ],
          mse_out: 3.008218195496922,
          mse_hres: 0.9345507354086597,
        },
        "20201221": {
          images: [
            "./././images/2020/2023_KROVANH/20201221\\tracking.png",
            "./././images/2020/2023_KROVANH/20201221\\forecast.png",
          ],
          mse_out: 2.2614741826512326,
          mse_hres: 2.7224887842910928,
        },
      },
      "2022_VAMCO": {
        "20201111": {
          images: [
            "./././images/2020/2022_VAMCO/20201111\\tracking.png",
            "./././images/2020/2022_VAMCO/20201111\\forecast.png",
          ],
          mse_out: 7.578897520051788,
          mse_hres: 6.25899746865825,
        },
        "20201113": {
          images: [
            "./././images/2020/2022_VAMCO/20201113\\tracking.png",
            "./././images/2020/2022_VAMCO/20201113\\forecast.png",
          ],
          mse_out: 20.379540582958793,
          mse_hres: 9.21636939638553,
        },
        "20201109": {
          images: [
            "./././images/2020/2022_VAMCO/20201109\\tracking.png",
            "./././images/2020/2022_VAMCO/20201109\\forecast.png",
          ],
          mse_out: 10.636050297604632,
          mse_hres: 0.6863851248634715,
        },
        "20201114": {
          images: [
            "./././images/2020/2022_VAMCO/20201114\\tracking.png",
            "./././images/2020/2022_VAMCO/20201114\\forecast.png",
          ],
          mse_out: 3.5422938666683828,
          mse_hres: 6.240303624857178,
        },
        "20201112": {
          images: [
            "./././images/2020/2022_VAMCO/20201112\\tracking.png",
            "./././images/2020/2022_VAMCO/20201112\\forecast.png",
          ],
          mse_out: 11.452103071177866,
          mse_hres: 0.9508933637881303,
        },
        "20201115": {
          images: [
            "./././images/2020/2022_VAMCO/20201115\\tracking.png",
            "./././images/2020/2022_VAMCO/20201115\\forecast.png",
          ],
          mse_out: 5.722557444421673,
          mse_hres: 5.982309050906254,
        },
        "20201110": {
          images: [
            "./././images/2020/2022_VAMCO/20201110\\tracking.png",
            "./././images/2020/2022_VAMCO/20201110\\forecast.png",
          ],
          mse_out: 3.583167116827262,
          mse_hres: 6.97726615608872,
        },
      },
      "2003_SINLAKU": {
        "20200802": {
          images: [
            "./././images/2020/2003_SINLAKU/20200802\\tracking.png",
            "./././images/2020/2003_SINLAKU/20200802\\forecast.png",
          ],
          mse_out: 1.4172815202029752,
          mse_hres: 7.803040398837889,
        },
        "20200801": {
          images: [
            "./././images/2020/2003_SINLAKU/20200801\\tracking.png",
            "./././images/2020/2003_SINLAKU/20200801\\forecast.png",
          ],
          mse_out: 2.4830084682039795,
          mse_hres: 0.9082879790262199,
        },
      },
      "2002_NURI": {
        "20200613": {
          images: [
            "./././images/2020/2002_NURI/20200613\\tracking.png",
            "./././images/2020/2002_NURI/20200613\\forecast.png",
          ],
          mse_out: 0.48912521717752777,
          mse_hres: 6.414329368075985,
        },
        "20200612": {
          images: [
            "./././images/2020/2002_NURI/20200612\\tracking.png",
            "./././images/2020/2002_NURI/20200612\\forecast.png",
          ],
          mse_out: 1.115392234187324,
          mse_hres: 1.3673164294266948,
        },
      },
      "2006_MEKKHALA": {
        "20200811": {
          images: [
            "./././images/2020/2006_MEKKHALA/20200811\\tracking.png",
            "./././images/2020/2006_MEKKHALA/20200811\\forecast.png",
          ],
          mse_out: 5.652980410474315,
          mse_hres: 0.29323037255625173,
        },
        "20200810": {
          images: [
            "./././images/2020/2006_MEKKHALA/20200810\\tracking.png",
            "./././images/2020/2006_MEKKHALA/20200810\\forecast.png",
          ],
          mse_out: 2.728236650568911,
          mse_hres: 1.08014295593701,
        },
      },
      "2017_SAUDEL": {
        "20201022": {
          images: [
            "./././images/2020/2017_SAUDEL/20201022\\tracking.png",
            "./././images/2020/2017_SAUDEL/20201022\\forecast.png",
          ],
          mse_out: 0.4970021568989257,
          mse_hres: 11.279777424124811,
        },
        "20201024": {
          images: [
            "./././images/2020/2017_SAUDEL/20201024\\tracking.png",
            "./././images/2020/2017_SAUDEL/20201024\\forecast.png",
          ],
          mse_out: 1.163887071336012,
          mse_hres: 3.7519299913175006,
        },
        "20201023": {
          images: [
            "./././images/2020/2017_SAUDEL/20201023\\tracking.png",
            "./././images/2020/2017_SAUDEL/20201023\\forecast.png",
          ],
          mse_out: 10.46879593773871,
          mse_hres: 4.913662923522979,
        },
        "20201025": {
          images: [
            "./././images/2020/2017_SAUDEL/20201025\\tracking.png",
            "./././images/2020/2017_SAUDEL/20201025\\forecast.png",
          ],
          mse_out: 3.0045371018516858,
          mse_hres: 0.5217613375025001,
        },
      },
      "2019_GONI": {
        "20201029": {
          images: [
            "./././images/2020/2019_GONI/20201029\\tracking.png",
            "./././images/2020/2019_GONI/20201029\\forecast.png",
          ],
          mse_out: 6.248927405406915,
          mse_hres: 43.02884183375389,
        },
        "20201031": {
          images: [
            "./././images/2020/2019_GONI/20201031\\tracking.png",
            "./././images/2020/2019_GONI/20201031\\forecast.png",
          ],
          mse_out: 23.184846398008546,
          mse_hres: 68.31600776874998,
        },
        "20201030": {
          images: [
            "./././images/2020/2019_GONI/20201030\\tracking.png",
            "./././images/2020/2019_GONI/20201030\\forecast.png",
          ],
          mse_out: 21.474520615664783,
          mse_hres: 150.26260826065817,
        },
        "20201104": {
          images: [
            "./././images/2020/2019_GONI/20201104\\tracking.png",
            "./././images/2020/2019_GONI/20201104\\forecast.png",
          ],
          mse_out: 0.44315608774167475,
          mse_hres: 1.2842862781108404,
        },
        "20201105": {
          images: [
            "./././images/2020/2019_GONI/20201105\\tracking.png",
            "./././images/2020/2019_GONI/20201105\\forecast.png",
          ],
          mse_out: 1.6198660531778828,
          mse_hres: 1.85941290604225,
        },
        "20201103": {
          images: [
            "./././images/2020/2019_GONI/20201103\\tracking.png",
            "./././images/2020/2019_GONI/20201103\\forecast.png",
          ],
          mse_out: 3.2656731688477736,
          mse_hres: 1.0086432844743196,
        },
        "20201102": {
          images: [
            "./././images/2020/2019_GONI/20201102\\tracking.png",
            "./././images/2020/2019_GONI/20201102\\forecast.png",
          ],
          mse_out: 1.5673389759072938,
          mse_hres: 0.6771314744932002,
        },
        "20201101": {
          images: [
            "./././images/2020/2019_GONI/20201101\\tracking.png",
            "./././images/2020/2019_GONI/20201101\\forecast.png",
          ],
          mse_out: 6.655291794033987,
          mse_hres: 1.6043481657948209,
        },
      },
      "2007_HIGOS": {
        "20200819": {
          images: [
            "./././images/2020/2007_HIGOS/20200819\\tracking.png",
            "./././images/2020/2007_HIGOS/20200819\\forecast.png",
          ],
          mse_out: 5.436774528578932,
          mse_hres: 38.800013985343945,
        },
        "20200818": {
          images: [
            "./././images/2020/2007_HIGOS/20200818\\tracking.png",
            "./././images/2020/2007_HIGOS/20200818\\forecast.png",
          ],
          mse_out: 3.808839256529128,
          mse_hres: 9.31022322258409,
        },
      },
      "2015_LINFA": {
        "20201010": {
          images: [
            "./././images/2020/2015_LINFA/20201010\\tracking.png",
            "./././images/2020/2015_LINFA/20201010\\forecast.png",
          ],
          mse_out: 3.659409342425193,
          mse_hres: 3.93732565622225,
        },
        "20201011": {
          images: [
            "./././images/2020/2015_LINFA/20201011\\tracking.png",
            "./././images/2020/2015_LINFA/20201011\\forecast.png",
          ],
          mse_out: 2.7047075335080843,
          mse_hres: 8.219567728132816,
        },
      },
      "2011_NOUL": {
        "20200916": {
          images: [
            "./././images/2020/2011_NOUL/20200916\\tracking.png",
            "./././images/2020/2011_NOUL/20200916\\forecast.png",
          ],
          mse_out: 0.6702030979630682,
          mse_hres: 0.9853928497545104,
        },
        "20200918": {
          images: [
            "./././images/2020/2011_NOUL/20200918\\tracking.png",
            "./././images/2020/2011_NOUL/20200918\\forecast.png",
          ],
          mse_out: 2.1536861905067313,
          mse_hres: 5.67875960784589,
        },
        "20200917": {
          images: [
            "./././images/2020/2011_NOUL/20200917\\tracking.png",
            "./././images/2020/2011_NOUL/20200917\\forecast.png",
          ],
          mse_out: 0.4695823482057172,
          mse_hres: 4.333619382177931,
        },
      },
      "2021_ETAU": {
        "20201110": {
          images: [
            "./././images/2020/2021_ETAU/20201110\\tracking.png",
            "./././images/2020/2021_ETAU/20201110\\forecast.png",
          ],
          mse_out: 13.555703502827264,
          mse_hres: 12.205386001334313,
        },
        "20201109": {
          images: [
            "./././images/2020/2021_ETAU/20201109\\tracking.png",
            "./././images/2020/2021_ETAU/20201109\\forecast.png",
          ],
          mse_out: 2.8442153470783773,
          mse_hres: 0.8293545094575796,
        },
      },
    },
    "2018": {
      "1823_BARIJAT": {
        "20180913": {
          images: [
            "./././images/2018/1823_BARIJAT/20180913\\tracking.png",
            "./././images/2018/1823_BARIJAT/20180913\\forecast.png",
          ],
          mse_out: 4.121065410119831,
          mse_hres: 14.243219412360993,
        },
        "20180912": {
          images: [
            "./././images/2018/1823_BARIJAT/20180912\\tracking.png",
            "./././images/2018/1823_BARIJAT/20180912\\forecast.png",
          ],
          mse_out: 0.20226434167092072,
          mse_hres: 1.7579952262825895,
        },
        "20180911": {
          images: [
            "./././images/2018/1823_BARIJAT/20180911\\tracking.png",
            "./././images/2018/1823_BARIJAT/20180911\\forecast.png",
          ],
          mse_out: 0.2417226048902658,
          mse_hres: 2.6021283138153906,
        },
      },
      "1806_GAEMI": {
        "20180615": {
          images: [
            "./././images/2018/1806_GAEMI/20180615\\tracking.png",
            "./././images/2018/1806_GAEMI/20180615\\forecast.png",
          ],
          mse_out: 0.4181656106918881,
          mse_hres: 0.07636913430613997,
        },
        "20180616": {
          images: [
            "./././images/2018/1806_GAEMI/20180616\\tracking.png",
            "./././images/2018/1806_GAEMI/20180616\\forecast.png",
          ],
          mse_out: 7.6382007569578025,
          mse_hres: 0.3257224894397503,
        },
        "20180617": {
          images: [
            "./././images/2018/1806_GAEMI/20180617\\tracking.png",
            "./././images/2018/1806_GAEMI/20180617\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
      },
      "1804_EWINIAR": {
        "20180606": {
          images: [
            "./././images/2018/1804_EWINIAR/20180606\\tracking.png",
            "./././images/2018/1804_EWINIAR/20180606\\forecast.png",
          ],
          mse_out: 1.0715868624382996,
          mse_hres: 3.6574054910811307,
        },
        "20180605": {
          images: [
            "./././images/2018/1804_EWINIAR/20180605\\tracking.png",
            "./././images/2018/1804_EWINIAR/20180605\\forecast.png",
          ],
          mse_out: 1.4574980516299456,
          mse_hres: 3.09805993272897,
        },
        "20180607": {
          images: [
            "./././images/2018/1804_EWINIAR/20180607\\tracking.png",
            "./././images/2018/1804_EWINIAR/20180607\\forecast.png",
          ],
          mse_out: 0.3963731648989778,
          mse_hres: 9.780407797655979,
        },
      },
      "1822_MANGKHUT": {
        "20180916": {
          images: [
            "./././images/2018/1822_MANGKHUT/20180916\\tracking.png",
            "./././images/2018/1822_MANGKHUT/20180916\\forecast.png",
          ],
          mse_out: 0.6950117583028619,
          mse_hres: 9.378717887892941,
        },
        "20180915": {
          images: [
            "./././images/2018/1822_MANGKHUT/20180915\\tracking.png",
            "./././images/2018/1822_MANGKHUT/20180915\\forecast.png",
          ],
          mse_out: 2.0224805695239625,
          mse_hres: 24.379440173703166,
        },
        "20180917": {
          images: [
            "./././images/2018/1822_MANGKHUT/20180917\\tracking.png",
            "./././images/2018/1822_MANGKHUT/20180917\\forecast.png",
          ],
          mse_out: 0.11761657384841256,
          mse_hres: 100.84863284496399,
        },
        "20180913": {
          images: [
            "./././images/2018/1822_MANGKHUT/20180913\\tracking.png",
            "./././images/2018/1822_MANGKHUT/20180913\\forecast.png",
          ],
          mse_out: 9.780126502463741,
          mse_hres: 27.602468802450993,
        },
        "20180912": {
          images: [
            "./././images/2018/1822_MANGKHUT/20180912\\tracking.png",
            "./././images/2018/1822_MANGKHUT/20180912\\forecast.png",
          ],
          mse_out: 9.806788491147902,
          mse_hres: 31.6841899918985,
        },
        "20180914": {
          images: [
            "./././images/2018/1822_MANGKHUT/20180914\\tracking.png",
            "./././images/2018/1822_MANGKHUT/20180914\\forecast.png",
          ],
          mse_out: 7.900464950823951,
          mse_hres: 17.991267788752925,
        },
      },
      "1827_TORAJI": {
        "20181118": {
          images: [
            "./././images/2018/1827_TORAJI/20181118\\tracking.png",
            "./././images/2018/1827_TORAJI/20181118\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
      },
      "1809_SONTINH": {
        "20180718": {
          images: [
            "./././images/2018/1809_SONTINH/20180718\\tracking.png",
            "./././images/2018/1809_SONTINH/20180718\\forecast.png",
          ],
          mse_out: 1.2473910832428792,
          mse_hres: 4.324511541519047,
        },
        "20180717": {
          images: [
            "./././images/2018/1809_SONTINH/20180717\\tracking.png",
            "./././images/2018/1809_SONTINH/20180717\\forecast.png",
          ],
          mse_out: 0.7140149832054521,
          mse_hres: 0.5896976905645399,
        },
      },
      "1816_BEBINCA": {
        "20180814": {
          images: [
            "./././images/2018/1816_BEBINCA/20180814\\tracking.png",
            "./././images/2018/1816_BEBINCA/20180814\\forecast.png",
          ],
          mse_out: 1.1447602482040093,
          mse_hres: 0.48892067389772986,
        },
        "20180816": {
          images: [
            "./././images/2018/1816_BEBINCA/20180816\\tracking.png",
            "./././images/2018/1816_BEBINCA/20180816\\forecast.png",
          ],
          mse_out: 0.5971484809110443,
          mse_hres: 2.3347115455501,
        },
        "20180813": {
          images: [
            "./././images/2018/1816_BEBINCA/20180813\\tracking.png",
            "./././images/2018/1816_BEBINCA/20180813\\forecast.png",
          ],
          mse_out: 1.7221611467523594,
          mse_hres: 0.7335724956920495,
        },
        "20180815": {
          images: [
            "./././images/2018/1816_BEBINCA/20180815\\tracking.png",
            "./././images/2018/1816_BEBINCA/20180815\\forecast.png",
          ],
          mse_out: 0.32450303119776364,
          mse_hres: 2.2326544009688396,
        },
      },
      "1826_YUTU": {
        "20181101": {
          images: [
            "./././images/2018/1826_YUTU/20181101\\tracking.png",
            "./././images/2018/1826_YUTU/20181101\\forecast.png",
          ],
          mse_out: 7.189867304656469,
          mse_hres: 6.830037221045191,
        },
        "20181028": {
          images: [
            "./././images/2018/1826_YUTU/20181028\\tracking.png",
            "./././images/2018/1826_YUTU/20181028\\forecast.png",
          ],
          mse_out: 16.47029107132079,
          mse_hres: 1.1208642573788095,
        },
        "20181027": {
          images: [
            "./././images/2018/1826_YUTU/20181027\\tracking.png",
            "./././images/2018/1826_YUTU/20181027\\forecast.png",
          ],
          mse_out: 2.8201153067866707,
          mse_hres: 12.87868299970641,
        },
        "20181031": {
          images: [
            "./././images/2018/1826_YUTU/20181031\\tracking.png",
            "./././images/2018/1826_YUTU/20181031\\forecast.png",
          ],
          mse_out: 34.38647943172556,
          mse_hres: 2.6366760076722207,
        },
        "20181030": {
          images: [
            "./././images/2018/1826_YUTU/20181030\\tracking.png",
            "./././images/2018/1826_YUTU/20181030\\forecast.png",
          ],
          mse_out: 5.458646602430806,
          mse_hres: 6.82137660968764,
        },
        "20181029": {
          images: [
            "./././images/2018/1826_YUTU/20181029\\tracking.png",
            "./././images/2018/1826_YUTU/20181029\\forecast.png",
          ],
          mse_out: 16.768709368193335,
          mse_hres: 4.3288248618009995,
        },
      },
      "1809_SON-TINH": {
        "20180718": {
          images: [
            "./././images/2018/1809_SON-TINH/20180718\\tracking.png",
            "./././images/2018/1809_SON-TINH/20180718\\forecast.png",
          ],
          mse_out: 1.2473910832428792,
          mse_hres: 4.324511541519047,
        },
        "20180717": {
          images: [
            "./././images/2018/1809_SON-TINH/20180717\\tracking.png",
            "./././images/2018/1809_SON-TINH/20180717\\forecast.png",
          ],
          mse_out: 0.7140149832054521,
          mse_hres: 0.5896976905645399,
        },
      },
      "1829_USAGI": {
        "20181125": {
          images: [
            "./././images/2018/1829_USAGI/20181125\\tracking.png",
            "./././images/2018/1829_USAGI/20181125\\forecast.png",
          ],
          mse_out: 19.41395074418022,
          mse_hres: 3.563526924163968,
        },
        "20181124": {
          images: [
            "./././images/2018/1829_USAGI/20181124\\tracking.png",
            "./././images/2018/1829_USAGI/20181124\\forecast.png",
          ],
          mse_out: 3.5801105203570507,
          mse_hres: 6.14110569516114,
        },
        "20181122": {
          images: [
            "./././images/2018/1829_USAGI/20181122\\tracking.png",
            "./././images/2018/1829_USAGI/20181122\\forecast.png",
          ],
          mse_out: 0.9815802581468125,
          mse_hres: 3.931174101005351,
        },
        "20181123": {
          images: [
            "./././images/2018/1829_USAGI/20181123\\tracking.png",
            "./././images/2018/1829_USAGI/20181123\\forecast.png",
          ],
          mse_out: 3.793741486034545,
          mse_hres: 7.559315829158291,
        },
      },
    },
    "2017": {
      "1708_SONCA": {
        "20170725": {
          images: [
            "./././images/2017/1708_SONCA/20170725\\tracking.png",
            "./././images/2017/1708_SONCA/20170725\\forecast.png",
          ],
          mse_out: 8.078536442786085,
          mse_hres: 19.021394528406244,
        },
        "20170723": {
          images: [
            "./././images/2017/1708_SONCA/20170723\\tracking.png",
            "./././images/2017/1708_SONCA/20170723\\forecast.png",
          ],
          mse_out: 0.8333045093769472,
          mse_hres: 3.9691892450213095,
        },
        "20170724": {
          images: [
            "./././images/2017/1708_SONCA/20170724\\tracking.png",
            "./././images/2017/1708_SONCA/20170724\\forecast.png",
          ],
          mse_out: 1.1280146119423837,
          mse_hres: 3.737562660096129,
        },
      },
      "1714_PAKHAR": {
        "20170825": {
          images: [
            "./././images/2017/1714_PAKHAR/20170825\\tracking.png",
            "./././images/2017/1714_PAKHAR/20170825\\forecast.png",
          ],
          mse_out: 0.23498329337658858,
          mse_hres: 2.7657759065634697,
        },
        "20170826": {
          images: [
            "./././images/2017/1714_PAKHAR/20170826\\tracking.png",
            "./././images/2017/1714_PAKHAR/20170826\\forecast.png",
          ],
          mse_out: 1.7023976831736534,
          mse_hres: 5.708446443426839,
        },
        "20170827": {
          images: [
            "./././images/2017/1714_PAKHAR/20170827\\tracking.png",
            "./././images/2017/1714_PAKHAR/20170827\\forecast.png",
          ],
          mse_out: 19.193451219542403,
          mse_hres: 20.19455140978325,
        },
      },
      "1720_KHANUN": {
        "20171016": {
          images: [
            "./././images/2017/1720_KHANUN/20171016\\tracking.png",
            "./././images/2017/1720_KHANUN/20171016\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20171015": {
          images: [
            "./././images/2017/1720_KHANUN/20171015\\tracking.png",
            "./././images/2017/1720_KHANUN/20171015\\forecast.png",
          ],
          mse_out: 2.1827635829209537,
          mse_hres: 13.570445585117076,
        },
        "20171014": {
          images: [
            "./././images/2017/1720_KHANUN/20171014\\tracking.png",
            "./././images/2017/1720_KHANUN/20171014\\forecast.png",
          ],
          mse_out: 2.102833167959055,
          mse_hres: 16.084329069435437,
        },
        "20171013": {
          images: [
            "./././images/2017/1720_KHANUN/20171013\\tracking.png",
            "./././images/2017/1720_KHANUN/20171013\\forecast.png",
          ],
          mse_out: 0.7392730798389311,
          mse_hres: 4.88060840451893,
        },
        "20171012": {
          images: [
            "./././images/2017/1720_KHANUN/20171012\\tracking.png",
            "./././images/2017/1720_KHANUN/20171012\\forecast.png",
          ],
          mse_out: 4.36224831028931,
          mse_hres: 0.32114680257866596,
        },
      },
      "1723_DAMREY": {
        "20171104": {
          images: [
            "./././images/2017/1723_DAMREY/20171104\\tracking.png",
            "./././images/2017/1723_DAMREY/20171104\\forecast.png",
          ],
          mse_out: 3.2769439292478997,
          mse_hres: 28.710042204101473,
        },
        "20171103": {
          images: [
            "./././images/2017/1723_DAMREY/20171103\\tracking.png",
            "./././images/2017/1723_DAMREY/20171103\\forecast.png",
          ],
          mse_out: 1.188955248260735,
          mse_hres: 37.91444149882003,
        },
        "20171102": {
          images: [
            "./././images/2017/1723_DAMREY/20171102\\tracking.png",
            "./././images/2017/1723_DAMREY/20171102\\forecast.png",
          ],
          mse_out: 2.488172280799673,
          mse_hres: 15.262029712048578,
        },
      },
      "1704_TALAS": {
        "20170717": {
          images: [
            "./././images/2017/1704_TALAS/20170717\\tracking.png",
            "./././images/2017/1704_TALAS/20170717\\forecast.png",
          ],
          mse_out: 2.6116218711559314,
          mse_hres: 21.31546384004956,
        },
        "20170715": {
          images: [
            "./././images/2017/1704_TALAS/20170715\\tracking.png",
            "./././images/2017/1704_TALAS/20170715\\forecast.png",
          ],
          mse_out: 0.6181976073631608,
          mse_hres: 9.475820692021689,
        },
        "20170716": {
          images: [
            "./././images/2017/1704_TALAS/20170716\\tracking.png",
            "./././images/2017/1704_TALAS/20170716\\forecast.png",
          ],
          mse_out: 0.2817133373559257,
          mse_hres: 6.013068492303059,
        },
      },
      "1725_KIROGI": {
        "20171118": {
          images: [
            "./././images/2017/1725_KIROGI/20171118\\tracking.png",
            "./././images/2017/1725_KIROGI/20171118\\forecast.png",
          ],
          mse_out: 3.815837436250703,
          mse_hres: 3.646562694743814,
        },
        "20171117": {
          images: [
            "./././images/2017/1725_KIROGI/20171117\\tracking.png",
            "./././images/2017/1725_KIROGI/20171117\\forecast.png",
          ],
          mse_out: 7.863672322376811,
          mse_hres: 7.714570132632246,
        },
      },
      "1727_TEMBIN": {
        "20171221": {
          images: [
            "./././images/2017/1727_TEMBIN/20171221\\tracking.png",
            "./././images/2017/1727_TEMBIN/20171221\\forecast.png",
          ],
          mse_out: 2.3550610677151544,
          mse_hres: 5.14425164437625,
        },
        "20171223": {
          images: [
            "./././images/2017/1727_TEMBIN/20171223\\tracking.png",
            "./././images/2017/1727_TEMBIN/20171223\\forecast.png",
          ],
          mse_out: 8.631406941918021,
          mse_hres: 19.153340213855312,
        },
        "20171225": {
          images: [
            "./././images/2017/1727_TEMBIN/20171225\\tracking.png",
            "./././images/2017/1727_TEMBIN/20171225\\forecast.png",
          ],
          mse_out: 1.440104178673664,
          mse_hres: 3.421404268801562,
        },
        "20171224": {
          images: [
            "./././images/2017/1727_TEMBIN/20171224\\tracking.png",
            "./././images/2017/1727_TEMBIN/20171224\\forecast.png",
          ],
          mse_out: 2.794751809007611,
          mse_hres: 14.040802799123266,
        },
        "20171222": {
          images: [
            "./././images/2017/1727_TEMBIN/20171222\\tracking.png",
            "./././images/2017/1727_TEMBIN/20171222\\forecast.png",
          ],
          mse_out: 0.6463503673470907,
          mse_hres: 7.08488337022159,
        },
      },
      "1717_GUCHOL": {
        "20170905": {
          images: [
            "./././images/2017/1717_GUCHOL/20170905\\tracking.png",
            "./././images/2017/1717_GUCHOL/20170905\\forecast.png",
          ],
          mse_out: 0.7626405858737301,
          mse_hres: 0.09686388383706196,
        },
        "20170904": {
          images: [
            "./././images/2017/1717_GUCHOL/20170904\\tracking.png",
            "./././images/2017/1717_GUCHOL/20170904\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
      },
      "1716_MAWAR": {
        "20170831": {
          images: [
            "./././images/2017/1716_MAWAR/20170831\\tracking.png",
            "./././images/2017/1716_MAWAR/20170831\\forecast.png",
          ],
          mse_out: 6.947544895255465,
          mse_hres: 4.508867445400249,
        },
        "20170902": {
          images: [
            "./././images/2017/1716_MAWAR/20170902\\tracking.png",
            "./././images/2017/1716_MAWAR/20170902\\forecast.png",
          ],
          mse_out: 1.9449423582957155,
          mse_hres: 6.755011819971689,
        },
        "20170901": {
          images: [
            "./././images/2017/1716_MAWAR/20170901\\tracking.png",
            "./././images/2017/1716_MAWAR/20170901\\forecast.png",
          ],
          mse_out: 2.037788298080007,
          mse_hres: 4.65023938330841,
        },
        "20170903": {
          images: [
            "./././images/2017/1716_MAWAR/20170903\\tracking.png",
            "./././images/2017/1716_MAWAR/20170903\\forecast.png",
          ],
          mse_out: 1.856736167248282,
          mse_hres: 2.6189893281192815,
        },
      },
      "1710_HAITANG": {
        "20170730": {
          images: [
            "./././images/2017/1710_HAITANG/20170730\\tracking.png",
            "./././images/2017/1710_HAITANG/20170730\\forecast.png",
          ],
          mse_out: 3.4463308395448755,
          mse_hres: 0.9752525493373596,
        },
        "20170731": {
          images: [
            "./././images/2017/1710_HAITANG/20170731\\tracking.png",
            "./././images/2017/1710_HAITANG/20170731\\forecast.png",
          ],
          mse_out: 16.486584918822157,
          mse_hres: 13.306142074322238,
        },
      },
      "1719_DOKSURI": {
        "20170914": {
          images: [
            "./././images/2017/1719_DOKSURI/20170914\\tracking.png",
            "./././images/2017/1719_DOKSURI/20170914\\forecast.png",
          ],
          mse_out: 12.444386888532554,
          mse_hres: 12.10243313667929,
        },
        "20170913": {
          images: [
            "./././images/2017/1719_DOKSURI/20170913\\tracking.png",
            "./././images/2017/1719_DOKSURI/20170913\\forecast.png",
          ],
          mse_out: 45.30861342645524,
          mse_hres: 1.2509204739035806,
        },
        "20170912": {
          images: [
            "./././images/2017/1719_DOKSURI/20170912\\tracking.png",
            "./././images/2017/1719_DOKSURI/20170912\\forecast.png",
          ],
          mse_out: 14.20404166574587,
          mse_hres: 3.2471690303505554,
        },
        "20170915": {
          images: [
            "./././images/2017/1719_DOKSURI/20170915\\tracking.png",
            "./././images/2017/1719_DOKSURI/20170915\\forecast.png",
          ],
          mse_out: 1.916383893682852,
          mse_hres: 10.28476660763289,
        },
      },
      "1713_HATO": {
        "20170821": {
          images: [
            "./././images/2017/1713_HATO/20170821\\tracking.png",
            "./././images/2017/1713_HATO/20170821\\forecast.png",
          ],
          mse_out: 0.5513017422648095,
          mse_hres: 1.0536766861305196,
        },
        "20170822": {
          images: [
            "./././images/2017/1713_HATO/20170822\\tracking.png",
            "./././images/2017/1713_HATO/20170822\\forecast.png",
          ],
          mse_out: 1.3504841678285393,
          mse_hres: 8.239207306963582,
        },
        "20170824": {
          images: [
            "./././images/2017/1713_HATO/20170824\\tracking.png",
            "./././images/2017/1713_HATO/20170824\\forecast.png",
          ],
          mse_out: 3.317569431347194,
          mse_hres: 11.319934035006249,
        },
        "20170823": {
          images: [
            "./././images/2017/1713_HATO/20170823\\tracking.png",
            "./././images/2017/1713_HATO/20170823\\forecast.png",
          ],
          mse_out: 6.942152315524164,
          mse_hres: 9.962657084226691,
        },
      },
      "1724_HAIKUI": {
        "20171109": {
          images: [
            "./././images/2017/1724_HAIKUI/20171109\\tracking.png",
            "./././images/2017/1724_HAIKUI/20171109\\forecast.png",
          ],
          mse_out: 4.680384900028812,
          mse_hres: 17.88592118062501,
        },
        "20171112": {
          images: [
            "./././images/2017/1724_HAIKUI/20171112\\tracking.png",
            "./././images/2017/1724_HAIKUI/20171112\\forecast.png",
          ],
          mse_out: 2.3201470626874245,
          mse_hres: 10.397013313599997,
        },
        "20171111": {
          images: [
            "./././images/2017/1724_HAIKUI/20171111\\tracking.png",
            "./././images/2017/1724_HAIKUI/20171111\\forecast.png",
          ],
          mse_out: 0.27091017866759415,
          mse_hres: 1.42202138291915,
        },
        "20171110": {
          images: [
            "./././images/2017/1724_HAIKUI/20171110\\tracking.png",
            "./././images/2017/1724_HAIKUI/20171110\\forecast.png",
          ],
          mse_out: 1.9093957565351822,
          mse_hres: 2.227823891826739,
        },
      },
      "1726_KAI-TAK": {
        "20171221": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171221\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171221\\forecast.png",
          ],
          mse_out: 8.938491607177546,
          mse_hres: 2.2154479548370016,
        },
        "20171218": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171218\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171218\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20171217": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171217\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171217\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20171214": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171214\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171214\\forecast.png",
          ],
          mse_out: 1.5263627662280244,
          mse_hres: 2.27080886459364,
        },
        "20171215": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171215\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171215\\forecast.png",
          ],
          mse_out: 2.698993435572457,
          mse_hres: 2.242656017719301,
        },
        "20171216": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171216\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171216\\forecast.png",
          ],
          mse_out: 7.623614101514695,
          mse_hres: 1.2002498552124978,
        },
        "20171220": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171220\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171220\\forecast.png",
          ],
          mse_out: 3.061732863643827,
          mse_hres: 0.9794816133970798,
        },
        "20171219": {
          images: [
            "./././images/2017/1726_KAI-TAK/20171219\\tracking.png",
            "./././images/2017/1726_KAI-TAK/20171219\\forecast.png",
          ],
          mse_out: 10.327029838199591,
          mse_hres: 6.216903930384004,
        },
      },
    },
    "2016": {
      "1614_MERANTI": {
        "20160914": {
          images: [
            "./././images/2016/1614_MERANTI/20160914\\tracking.png",
            "./././images/2016/1614_MERANTI/20160914\\forecast.png",
          ],
          mse_out: 11.399972444735635,
          mse_hres: 31.29174762893096,
        },
        "20160915": {
          images: [
            "./././images/2016/1614_MERANTI/20160915\\tracking.png",
            "./././images/2016/1614_MERANTI/20160915\\forecast.png",
          ],
          mse_out: 6.016890588469181,
          mse_hres: 48.431187087901556,
        },
        "20160912": {
          images: [
            "./././images/2016/1614_MERANTI/20160912\\tracking.png",
            "./././images/2016/1614_MERANTI/20160912\\forecast.png",
          ],
          mse_out: 24.380955516991314,
          mse_hres: 68.35906785645751,
        },
        "20160913": {
          images: [
            "./././images/2016/1614_MERANTI/20160913\\tracking.png",
            "./././images/2016/1614_MERANTI/20160913\\forecast.png",
          ],
          mse_out: 22.552751964786253,
          mse_hres: 79.92402418342434,
        },
        "20160911": {
          images: [
            "./././images/2016/1614_MERANTI/20160911\\tracking.png",
            "./././images/2016/1614_MERANTI/20160911\\forecast.png",
          ],
          mse_out: 11.353896424396286,
          mse_hres: 13.155020962664981,
        },
      },
      "1608_DIANMU": {
        "20160819": {
          images: [
            "./././images/2016/1608_DIANMU/20160819\\tracking.png",
            "./././images/2016/1608_DIANMU/20160819\\forecast.png",
          ],
          mse_out: 8.434202442982391,
          mse_hres: 1.7650815423400021,
        },
        "20160818": {
          images: [
            "./././images/2016/1608_DIANMU/20160818\\tracking.png",
            "./././images/2016/1608_DIANMU/20160818\\forecast.png",
          ],
          mse_out: 4.195492610904968,
          mse_hres: 0.7562368412550502,
        },
      },
      "1615_RAI": {
        "20160912": {
          images: [
            "./././images/2016/1615_RAI/20160912\\tracking.png",
            "./././images/2016/1615_RAI/20160912\\forecast.png",
          ],
          mse_out: 23.931570680722643,
          mse_hres: 1.0685990262768126,
        },
        "20160913": {
          images: [
            "./././images/2016/1615_RAI/20160913\\tracking.png",
            "./././images/2016/1615_RAI/20160913\\forecast.png",
          ],
          mse_out: 28.788318765997925,
          mse_hres: 0.29664471180100194,
        },
      },
      "1603_MIRINAE": {
        "20160727": {
          images: [
            "./././images/2016/1603_MIRINAE/20160727\\tracking.png",
            "./././images/2016/1603_MIRINAE/20160727\\forecast.png",
          ],
          mse_out: 3.9536267964500653,
          mse_hres: 3.98103244260768,
        },
        "20160728": {
          images: [
            "./././images/2016/1603_MIRINAE/20160728\\tracking.png",
            "./././images/2016/1603_MIRINAE/20160728\\forecast.png",
          ],
          mse_out: 12.633172708825203,
          mse_hres: 2.3855373968422517,
        },
      },
      "1604_NIDA": {
        "20160801": {
          images: [
            "./././images/2016/1604_NIDA/20160801\\tracking.png",
            "./././images/2016/1604_NIDA/20160801\\forecast.png",
          ],
          mse_out: 5.246168787886679,
          mse_hres: 4.75683643572075,
        },
        "20160803": {
          images: [
            "./././images/2016/1604_NIDA/20160803\\tracking.png",
            "./././images/2016/1604_NIDA/20160803\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20160802": {
          images: [
            "./././images/2016/1604_NIDA/20160802\\tracking.png",
            "./././images/2016/1604_NIDA/20160802\\forecast.png",
          ],
          mse_out: 4.596479315870391,
          mse_hres: 7.000898495431817,
        },
        "20160731": {
          images: [
            "./././images/2016/1604_NIDA/20160731\\tracking.png",
            "./././images/2016/1604_NIDA/20160731\\forecast.png",
          ],
          mse_out: 2.575367996197239,
          mse_hres: 5.213122301716773,
        },
        "20160730": {
          images: [
            "./././images/2016/1604_NIDA/20160730\\tracking.png",
            "./././images/2016/1604_NIDA/20160730\\forecast.png",
          ],
          mse_out: 2.140445755063081,
          mse_hres: 5.643744121887968,
        },
      },
      "1621_SARIKA": {
        "20161019": {
          images: [
            "./././images/2016/1621_SARIKA/20161019\\tracking.png",
            "./././images/2016/1621_SARIKA/20161019\\forecast.png",
          ],
          mse_out: 29.854615838597095,
          mse_hres: 5.9153536225000005,
        },
        "20161018": {
          images: [
            "./././images/2016/1621_SARIKA/20161018\\tracking.png",
            "./././images/2016/1621_SARIKA/20161018\\forecast.png",
          ],
          mse_out: 15.305377299703135,
          mse_hres: 0.5932066116637401,
        },
        "20161016": {
          images: [
            "./././images/2016/1621_SARIKA/20161016\\tracking.png",
            "./././images/2016/1621_SARIKA/20161016\\forecast.png",
          ],
          mse_out: 15.393394582763213,
          mse_hres: 29.258470733432386,
        },
        "20161017": {
          images: [
            "./././images/2016/1621_SARIKA/20161017\\tracking.png",
            "./././images/2016/1621_SARIKA/20161017\\forecast.png",
          ],
          mse_out: 3.138587723188266,
          mse_hres: 10.646725132207271,
        },
        "20161013": {
          images: [
            "./././images/2016/1621_SARIKA/20161013\\tracking.png",
            "./././images/2016/1621_SARIKA/20161013\\forecast.png",
          ],
          mse_out: 4.761726662201795,
          mse_hres: 4.320529755649997,
        },
        "20161014": {
          images: [
            "./././images/2016/1621_SARIKA/20161014\\tracking.png",
            "./././images/2016/1621_SARIKA/20161014\\forecast.png",
          ],
          mse_out: 1.5909318018035454,
          mse_hres: 9.661098701095822,
        },
        "20161015": {
          images: [
            "./././images/2016/1621_SARIKA/20161015\\tracking.png",
            "./././images/2016/1621_SARIKA/20161015\\forecast.png",
          ],
          mse_out: 17.99821477251944,
          mse_hres: 24.62209267757271,
        },
      },
      "1619_AERE": {
        "20161009": {
          images: [
            "./././images/2016/1619_AERE/20161009\\tracking.png",
            "./././images/2016/1619_AERE/20161009\\forecast.png",
          ],
          mse_out: 0.5467762622485667,
          mse_hres: 4.806417861160828,
        },
        "20161006": {
          images: [
            "./././images/2016/1619_AERE/20161006\\tracking.png",
            "./././images/2016/1619_AERE/20161006\\forecast.png",
          ],
          mse_out: 0.3940615782105623,
          mse_hres: 0.8611330198082301,
        },
        "20161007": {
          images: [
            "./././images/2016/1619_AERE/20161007\\tracking.png",
            "./././images/2016/1619_AERE/20161007\\forecast.png",
          ],
          mse_out: 7.51065158368702,
          mse_hres: 22.175047859464023,
        },
        "20161010": {
          images: [
            "./././images/2016/1619_AERE/20161010\\tracking.png",
            "./././images/2016/1619_AERE/20161010\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20161008": {
          images: [
            "./././images/2016/1619_AERE/20161008\\tracking.png",
            "./././images/2016/1619_AERE/20161008\\forecast.png",
          ],
          mse_out: 3.157463233238601,
          mse_hres: 7.766161941895821,
        },
        "20161005": {
          images: [
            "./././images/2016/1619_AERE/20161005\\tracking.png",
            "./././images/2016/1619_AERE/20161005\\forecast.png",
          ],
          mse_out: 1.058290970201565,
          mse_hres: 0.5337273713619988,
        },
      },
      "1625_TOKAGE": {
        "20161128": {
          images: [
            "./././images/2016/1625_TOKAGE/20161128\\tracking.png",
            "./././images/2016/1625_TOKAGE/20161128\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20161127": {
          images: [
            "./././images/2016/1625_TOKAGE/20161127\\tracking.png",
            "./././images/2016/1625_TOKAGE/20161127\\forecast.png",
          ],
          mse_out: 1.8307630104549282,
          mse_hres: 6.157947064205078,
        },
        "20161125": {
          images: [
            "./././images/2016/1625_TOKAGE/20161125\\tracking.png",
            "./././images/2016/1625_TOKAGE/20161125\\forecast.png",
          ],
          mse_out: 2.9672006753922537,
          mse_hres: 3.015316291927222,
        },
        "20161126": {
          images: [
            "./././images/2016/1625_TOKAGE/20161126\\tracking.png",
            "./././images/2016/1625_TOKAGE/20161126\\forecast.png",
          ],
          mse_out: 0.9667833704396539,
          mse_hres: 6.357893175462659,
        },
      },
      "1622_HAIMA": {
        "20161019": {
          images: [
            "./././images/2016/1622_HAIMA/20161019\\tracking.png",
            "./././images/2016/1622_HAIMA/20161019\\forecast.png",
          ],
          mse_out: 8.519588743751424,
          mse_hres: 33.38392659852725,
        },
        "20161018": {
          images: [
            "./././images/2016/1622_HAIMA/20161018\\tracking.png",
            "./././images/2016/1622_HAIMA/20161018\\forecast.png",
          ],
          mse_out: 10.250022217948962,
          mse_hres: 51.17985105885499,
        },
        "20161020": {
          images: [
            "./././images/2016/1622_HAIMA/20161020\\tracking.png",
            "./././images/2016/1622_HAIMA/20161020\\forecast.png",
          ],
          mse_out: 15.201719407862509,
          mse_hres: 13.531889301178413,
        },
        "20161021": {
          images: [
            "./././images/2016/1622_HAIMA/20161021\\tracking.png",
            "./././images/2016/1622_HAIMA/20161021\\forecast.png",
          ],
          mse_out: 17.262501473682896,
          mse_hres: 1.5025882980539158,
        },
        "20161017": {
          images: [
            "./././images/2016/1622_HAIMA/20161017\\tracking.png",
            "./././images/2016/1622_HAIMA/20161017\\forecast.png",
          ],
          mse_out: 0.7048326159965009,
          mse_hres: 62.85493938944289,
        },
      },
    },
    "2014": {
      "1422_HAGUPIT": {
        "20141210": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141210\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141210\\forecast.png",
          ],
          mse_out: 0.18921031933118174,
          mse_hres: 0.94021370473194,
        },
        "20141205": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141205\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141205\\forecast.png",
          ],
          mse_out: 7.660638642724504,
          mse_hres: 81.57172231936008,
        },
        "20141204": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141204\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141204\\forecast.png",
          ],
          mse_out: 18.133328002900384,
          mse_hres: 139.47679172370633,
        },
        "20141211": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141211\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141211\\forecast.png",
          ],
          mse_out: 2.569458182996223,
          mse_hres: 3.202016778723998,
        },
        "20141209": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141209\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141209\\forecast.png",
          ],
          mse_out: 0.31331678925205403,
          mse_hres: 0.31183054678327987,
        },
        "20141206": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141206\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141206\\forecast.png",
          ],
          mse_out: 1.0355703728215762,
          mse_hres: 42.63770631844536,
        },
        "20141208": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141208\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141208\\forecast.png",
          ],
          mse_out: 0.32880846175239725,
          mse_hres: 9.9314524851979,
        },
        "20141207": {
          images: [
            "./././images/2014/1422_HAGUPIT/20141207\\tracking.png",
            "./././images/2014/1422_HAGUPIT/20141207\\forecast.png",
          ],
          mse_out: 0.47176055182760984,
          mse_hres: 43.656882547596055,
        },
      },
      "1409_RAMMASUN": {
        "20140714": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140714\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140714\\forecast.png",
          ],
          mse_out: 13.744774614920454,
          mse_hres: 39.85341254512705,
        },
        "20140716": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140716\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140716\\forecast.png",
          ],
          mse_out: 12.563900582500803,
          mse_hres: 13.378587668242002,
        },
        "20140718": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140718\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140718\\forecast.png",
          ],
          mse_out: 4.941500423008975,
          mse_hres: 14.089509803191214,
        },
        "20140715": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140715\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140715\\forecast.png",
          ],
          mse_out: 8.262739268502525,
          mse_hres: 50.48458908923876,
        },
        "20140719": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140719\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140719\\forecast.png",
          ],
          mse_out: 10.725518340852988,
          mse_hres: 7.8512084964608055,
        },
        "20140717": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140717\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140717\\forecast.png",
          ],
          mse_out: 18.47516624912484,
          mse_hres: 7.389604038614891,
        },
        "20140720": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140720\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140720\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20140713": {
          images: [
            "./././images/2014/1409_RAMMASUN/20140713\\tracking.png",
            "./././images/2014/1409_RAMMASUN/20140713\\forecast.png",
          ],
          mse_out: 1.2976638928504154,
          mse_hres: 11.807815207069341,
        },
      },
      "1402_KAJIKI": {
        "20140131": {
          images: [
            "./././images/2014/1402_KAJIKI/20140131\\tracking.png",
            "./././images/2014/1402_KAJIKI/20140131\\forecast.png",
          ],
          mse_out: 5.525918231278772,
          mse_hres: 1.1081826743685304,
        },
        "20140201": {
          images: [
            "./././images/2014/1402_KAJIKI/20140201\\tracking.png",
            "./././images/2014/1402_KAJIKI/20140201\\forecast.png",
          ],
          mse_out: 4.504769181754909,
          mse_hres: 3.997320448900002,
        },
      },
      "1421_SINLAKU": {
        "20141129": {
          images: [
            "./././images/2014/1421_SINLAKU/20141129\\tracking.png",
            "./././images/2014/1421_SINLAKU/20141129\\forecast.png",
          ],
          mse_out: 1.6108429069432486,
          mse_hres: 12.03482992972959,
        },
        "20141130": {
          images: [
            "./././images/2014/1421_SINLAKU/20141130\\tracking.png",
            "./././images/2014/1421_SINLAKU/20141130\\forecast.png",
          ],
          mse_out: 7.097310304932838,
          mse_hres: 59.942489258262256,
        },
        "20141128": {
          images: [
            "./././images/2014/1421_SINLAKU/20141128\\tracking.png",
            "./././images/2014/1421_SINLAKU/20141128\\forecast.png",
          ],
          mse_out: 0.6107622717596921,
          mse_hres: 2.9471430270122196,
        },
      },
    },
    "2015": {
      "1504_MAYSAK": {
        "20150402": {
          images: [
            "./././images/2015/1504_MAYSAK/20150402\\tracking.png",
            "./././images/2015/1504_MAYSAK/20150402\\forecast.png",
          ],
          mse_out: 3.124762569952883,
          mse_hres: 26.45404307737825,
        },
        "20150403": {
          images: [
            "./././images/2015/1504_MAYSAK/20150403\\tracking.png",
            "./././images/2015/1504_MAYSAK/20150403\\forecast.png",
          ],
          mse_out: 17.905125736800482,
          mse_hres: 18.521035715592852,
        },
        "20150405": {
          images: [
            "./././images/2015/1504_MAYSAK/20150405\\tracking.png",
            "./././images/2015/1504_MAYSAK/20150405\\forecast.png",
          ],
          mse_out: 3.281050535122424,
          mse_hres: 5.229961921920999,
        },
        "20150404": {
          images: [
            "./././images/2015/1504_MAYSAK/20150404\\tracking.png",
            "./././images/2015/1504_MAYSAK/20150404\\forecast.png",
          ],
          mse_out: 1.4331323146963573,
          mse_hres: 3.4340403877097203,
        },
        "20150401": {
          images: [
            "./././images/2015/1504_MAYSAK/20150401\\tracking.png",
            "./././images/2015/1504_MAYSAK/20150401\\forecast.png",
          ],
          mse_out: 3.919630262386579,
          mse_hres: 16.193902848774496,
        },
      },
      "1508_KUJIRA": {
        "20150622": {
          images: [
            "./././images/2015/1508_KUJIRA/20150622\\tracking.png",
            "./././images/2015/1508_KUJIRA/20150622\\forecast.png",
          ],
          mse_out: 1.0129598291606228,
          mse_hres: 3.5177708855565006,
        },
        "20150624": {
          images: [
            "./././images/2015/1508_KUJIRA/20150624\\tracking.png",
            "./././images/2015/1508_KUJIRA/20150624\\forecast.png",
          ],
          mse_out: 1.353758988304854,
          mse_hres: 4.837823594445695,
        },
        "20150623": {
          images: [
            "./././images/2015/1508_KUJIRA/20150623\\tracking.png",
            "./././images/2015/1508_KUJIRA/20150623\\forecast.png",
          ],
          mse_out: 0.7038752563817076,
          mse_hres: 1.4012449252290702,
        },
        "20150621": {
          images: [
            "./././images/2015/1508_KUJIRA/20150621\\tracking.png",
            "./././images/2015/1508_KUJIRA/20150621\\forecast.png",
          ],
          mse_out: 0.9629127066746965,
          mse_hres: 5.35251033715455,
        },
      },
      "1510_LINFA": {
        "20150704": {
          images: [
            "./././images/2015/1510_LINFA/20150704\\tracking.png",
            "./././images/2015/1510_LINFA/20150704\\forecast.png",
          ],
          mse_out: 1.0448274453649367,
          mse_hres: 2.307009556836669,
        },
        "20150707": {
          images: [
            "./././images/2015/1510_LINFA/20150707\\tracking.png",
            "./././images/2015/1510_LINFA/20150707\\forecast.png",
          ],
          mse_out: 16.12374321289635,
          mse_hres: 2.7354655624018402,
        },
        "20150708": {
          images: [
            "./././images/2015/1510_LINFA/20150708\\tracking.png",
            "./././images/2015/1510_LINFA/20150708\\forecast.png",
          ],
          mse_out: 28.869427173658266,
          mse_hres: 5.425111312109881,
        },
        "20150706": {
          images: [
            "./././images/2015/1510_LINFA/20150706\\tracking.png",
            "./././images/2015/1510_LINFA/20150706\\forecast.png",
          ],
          mse_out: 0.9341265889294836,
          mse_hres: 0.1789373066540105,
        },
        "20150703": {
          images: [
            "./././images/2015/1510_LINFA/20150703\\tracking.png",
            "./././images/2015/1510_LINFA/20150703\\forecast.png",
          ],
          mse_out: 0.4275052324944921,
          mse_hres: 1.0368909476117494,
        },
        "20150705": {
          images: [
            "./././images/2015/1510_LINFA/20150705\\tracking.png",
            "./././images/2015/1510_LINFA/20150705\\forecast.png",
          ],
          mse_out: 2.133100316301756,
          mse_hres: 2.5829255235686497,
        },
        "20150702": {
          images: [
            "./././images/2015/1510_LINFA/20150702\\tracking.png",
            "./././images/2015/1510_LINFA/20150702\\forecast.png",
          ],
          mse_out: 2.4260413177612654,
          mse_hres: 6.513636636261499,
        },
        "20150709": {
          images: [
            "./././images/2015/1510_LINFA/20150709\\tracking.png",
            "./././images/2015/1510_LINFA/20150709\\forecast.png",
          ],
          mse_out: 4.741386137789347,
          mse_hres: 9.731346341076701,
        },
      },
      "1527_MELOR": {
        "20151213": {
          images: [
            "./././images/2015/1527_MELOR/20151213\\tracking.png",
            "./././images/2015/1527_MELOR/20151213\\forecast.png",
          ],
          mse_out: 9.404655616020856,
          mse_hres: 86.02683618231309,
        },
        "20151214": {
          images: [
            "./././images/2015/1527_MELOR/20151214\\tracking.png",
            "./././images/2015/1527_MELOR/20151214\\forecast.png",
          ],
          mse_out: 21.443243696104826,
          mse_hres: 105.38158417823233,
        },
        "20151215": {
          images: [
            "./././images/2015/1527_MELOR/20151215\\tracking.png",
            "./././images/2015/1527_MELOR/20151215\\forecast.png",
          ],
          mse_out: 46.77614407768299,
          mse_hres: 84.97632454051939,
        },
        "20151212": {
          images: [
            "./././images/2015/1527_MELOR/20151212\\tracking.png",
            "./././images/2015/1527_MELOR/20151212\\forecast.png",
          ],
          mse_out: 2.7907253156481358,
          mse_hres: 21.66416031486652,
        },
        "20151217": {
          images: [
            "./././images/2015/1527_MELOR/20151217\\tracking.png",
            "./././images/2015/1527_MELOR/20151217\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20151216": {
          images: [
            "./././images/2015/1527_MELOR/20151216\\tracking.png",
            "./././images/2015/1527_MELOR/20151216\\forecast.png",
          ],
          mse_out: 11.34986379270967,
          mse_hres: 9.6739809965902,
        },
      },
      "1519_VAMCO": {
        "20150914": {
          images: [
            "./././images/2015/1519_VAMCO/20150914\\tracking.png",
            "./././images/2015/1519_VAMCO/20150914\\forecast.png",
          ],
          mse_out: 3.840277007615273,
          mse_hres: 1.4470346540096557,
        },
      },
      "1522_MUJIGAE": {
        "20151003": {
          images: [
            "./././images/2015/1522_MUJIGAE/20151003\\tracking.png",
            "./././images/2015/1522_MUJIGAE/20151003\\forecast.png",
          ],
          mse_out: 3.169068090157166,
          mse_hres: 24.014099374454172,
        },
        "20151004": {
          images: [
            "./././images/2015/1522_MUJIGAE/20151004\\tracking.png",
            "./././images/2015/1522_MUJIGAE/20151004\\forecast.png",
          ],
          mse_out: 16.981570695739887,
          mse_hres: 59.07221077100723,
        },
        "20151005": {
          images: [
            "./././images/2015/1522_MUJIGAE/20151005\\tracking.png",
            "./././images/2015/1522_MUJIGAE/20151005\\forecast.png",
          ],
          mse_out: null,
          mse_hres: null,
        },
        "20151002": {
          images: [
            "./././images/2015/1522_MUJIGAE/20151002\\tracking.png",
            "./././images/2015/1522_MUJIGAE/20151002\\forecast.png",
          ],
          mse_out: 0.1655423510955028,
          mse_hres: 10.180356028015023,
        },
      },
    },
  });
  const [selectedStorm, setSelectedStorm] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Compute minDate and maxDate based on selectedStorm
  // const { date } = useMemo(() => {
  //   if (!stormData || !selectedStorm) {
  //     return { minDate: null, maxDate: null };
  //   }

  //   const years = Object.keys(stormData);
  //   let dates: string[] = [];

  //   years.forEach((year) => {
  //     if (stormData[year]?.[selectedStorm]) {
  //       const stormDates = Object.keys(stormData[year][selectedStorm]);
  //       dates.push(...stormDates);
  //     }
  //   });

  //   if (dates.length === 0) {
  //     return { minDate: null, maxDate: null };
  //   }

  //   // Sort dates to find min and max
  //   dates.sort();
  //   return {
  //     date: dates[0],
  //   };
  // }, [stormData, selectedStorm]);

  return (
    <Router>
      <div className="app-grid">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="col1">
                  <FilterBox
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    onSelectStorm={setSelectedStorm}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                  />
                  <div className="vertical-divider"></div>
                </div>
                <div className="col3 content">
                  <HeadLine>
                    AI-based Meteorological And Hydrological Forecasting
                  </HeadLine>
                  <div className="tags-container">
                    <div className="first-tag chosen-tag">
                      <Link to="/">
                        <div className="chosen-tag-text">
                          TC Intensity Estimate
                        </div>
                      </Link>
                    </div>
                    <div className="last-tag tag">
                      <Link to="/precipitation">
                        <div className="tag-text">Precipitation Prediction</div>
                      </Link>
                    </div>
                  </div>
                  <Content
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    date={selectedDate || new Date()}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/precipitation"
            element={
              <>
                <div className="col1">
                  <FilterBox
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    onSelectStorm={setSelectedStorm}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                  />
                  <div className="vertical-divider"></div>
                </div>
                <div className="col3 content">
                  <HeadLine>
                    AI-based Meteorological And Hydrological Forecasting
                  </HeadLine>
                  <div className="tags-container">
                    <div className="first-tag chosen-tag">
                      <Link to="/">
                        <div className="chosen-tag-text">
                          TC Intensity Estimate
                        </div>
                      </Link>
                    </div>
                    <div className="last-tag tag">
                      <Link to="/precipitation">
                        <div className="tag-text">Precipitation Prediction</div>
                      </Link>
                    </div>
                  </div>
                  <Content
                    stormData={stormData}
                    selectedStorm={selectedStorm}
                    date={selectedDate || new Date()}
                  />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { cp } from '../src/ls/main';
import { rm } from '../src/ls/rm';

// calcClosestDepth('.vscode/launch.json', '.vscode');
// calcClosestDepth('.vscode/launch.json', '.vscode');
// async function testRm() {
//     const src = '\\\\169.254.252.81\\sGlory\\dlc';
//     const dist = 'C:\\Users\\zhangshiyang\\Desktop\\test\\dlc';
//     await cp(src, dist);
//     await rm(dist);
// }

// testRm();
class RuleType {
    static ConfirmDealer = 'confirmDealer'; //confirmDealer"
    static KongBombContract = 'kongBombContract'; //gangBaoContract"
    static FollowDealer = 'followDealer'; //genZhuang"
    static OpenGhostType = 'openGhostType'; //ghostType"
    static HorseNum = 'horseNum'; //horseType"
    static HigherAndHigher = 'higherAndHigher'; //jieJieGao"
    static LastTileWinMultiple = 'lastTileWinMultiple'; //lastTileWinMulti"
    static DrawnWithKong = 'drawnWithKong'; //liuJuSuanGang"
    static NoneGhostMultiple = 'noneGhostMultiple'; //noneGhostMulti
    static HasHonors = 'hasHonors'; //noWinds""
    static RobKongContract = 'robKongContract'; //qiangGangContract""
    static RedDragonPoint = 'redDragonPoint'; //redDragonAddPoint"
    static CanWinByRobKong = 'canWinByRobKong'; //robKong
    static RobKongWinMultiple = 'robKongWinMultiple'; //robKongMulti"
    static RoundNum = 'roundNum'; //roundNum"
    static SevenPairsMultiple = 'sevenPairsMultiple'; //sevenPairsMulti"
    static TwelveGroundContract = 'twelveGroundContract'; //twelveContract"
    static WinAfterKongMultiple = 'winAfterKongMultiple'; // winAfterKongMulti"
    static RoundDealer = 'roundDealer';
    static SystemCountdownTime = 'systemCountdownTime';
    static PlayerNum = 'playerNum';
    static OpenChickenRule = 'openChickenRule';
    static BlackBoneChicken = 'blackBoneChicken';
    static WholeHouse = 'wholeHouse';
    static BeanWrap = 'beanWrap';
    static ChickenWrap = 'chickenWrap';
    static RobKongBean = 'robKongBean';
    static RobKongChicken = 'robKongChicken';
    static TumoAddOne = 'tumoAddOne';
    static VoiceSwitch = 'voiceSwitch';
    static PositionSwitch = 'positionSwitch';
    static RonWin = 'ronWin';
    static ChickenCantRonwin = 'chickenCantRonwin';
    static SmallWin = 'smallWin';
    static TwoRoomCard = 'twoRoomCard';
    static OwnChicken = 'ownChicken';
    static HighLowChicken = 'highLowChicken';
    static BuyHorseType = 'buyHorseType';
    static NumericHorse = 'numbericHorse';
    static MaxWin = 'maxWin';
    static ChangeCard = 'changeCard';
    static CallForwarding = 'callForwarding';
    static TumoMutiple = 'tumoMutiple';
    static PointBar = 'pointBar';
    static MenQing = 'menQing';
    static DaiYaojiu = 'daiYaojiu';
    static DuanYaojiu = 'duanYaojiu';
    static JiangDui = 'jiangDui';
    static SkyLand = 'skyLand';
    static ChuiFengFi = 'chuifengji';
    static WaWaJi = 'wawaji';
    static Huangleji = 'huangleji';
    static ChongFengJi = 'chongfengji';
    static ChongFengWuguJi = 'chongfengwuguji';
    static ZerenJi = 'zerenji';
    static Tianting = 'tianting';
    static Qianhouji = 'qianhouji';
    static XingQiJi = 'xingqiji';
}

enum YakuType {
    JiHu = 1, //鸡胡
    PingHu = 2, //平胡
    SiGuiHu = 3, //四鬼胡
    PengHu = 4, //碰碰胡
    HunYiShe = 5, //混一色
    QiXiaoDui = 6, //七小对
    QingYiShe = 7, //清一色
    HunPeng = 8, //混碰
    HaoHuaQiXiaoDui = 9, //豪华七小对
    XiaoSanYuan = 10, //小三元
    XiaoSiXi = 11, //小四喜
    QingPeng = 12, //清碰
    HunYaoJiu = 13, //混幺九
    DaSanYuan = 14, //大三元
    DaSiXi = 15, //大四喜
    ZiYiSe = 16, //字一色
    QingYaoJiu = 17, //清幺九
    ShuangHaoHuaQiXiaoDui = 18, //双豪华七小对
    SanHaoHuaQiXiaoDui = 19, //三豪华七小对
    ShiBaLuoHan = 20, //十八罗汉
    TianHu = 21, //天胡
    DiHu = 22, //地胡
    ShiSanYao = 23, //十三幺
    QingLongBei = 24, //青龙背
    LongQiDui = 25, //龙七对
    QingQiDui = 26, //清七对
    QingDanDiao = 27, //清单吊
    QiDaDui = 28, //清大对
    QiDui = 29, //七对
    DanDiao = 30, //单吊
    DaDuiZi = 31, //大对子
    DiLong = 48, //地龙
    BianKanDiao = 49, //边坎吊
    DaKuanZhang = 50, //大宽张
}

let test1 = [
    RuleType.RoundNum,
    -1,
    RuleType.SystemCountdownTime,
    -1,
    RuleType.WholeHouse,
    -1,
    RuleType.OwnChicken,
    RuleType.BlackBoneChicken,
    RuleType.HighLowChicken,
    RuleType.TumoAddOne,
    RuleType.HigherAndHigher,
    RuleType.ChuiFengFi,
    RuleType.WaWaJi,
    -6,
    RuleType.ChongFengJi,
    RuleType.ChongFengWuguJi,
    RuleType.ZerenJi,
    RuleType.Huangleji,
    -2,
    YakuType.PingHu,
    -8,
    YakuType.DaDuiZi,
    YakuType.QiDui,
    YakuType.DanDiao,
    YakuType.QingYiShe,
    YakuType.QiDaDui,
    YakuType.QingDanDiao,
    YakuType.LongQiDui,
    YakuType.QingQiDui,
    YakuType.QingLongBei,
    YakuType.DiLong,
    -2,
    RuleType.ConfirmDealer,
    -3,
    RuleType.RoundDealer,
    -3,
];

const test2 = [
    RuleType.RoundNum,
    -1,
    RuleType.SystemCountdownTime,
    -1,
    RuleType.WholeHouse,
    -1,
    RuleType.OwnChicken,
    RuleType.BlackBoneChicken,
    RuleType.HighLowChicken,
    RuleType.TumoAddOne,
    RuleType.HigherAndHigher,
    RuleType.TwoRoomCard,
    RuleType.ChuiFengFi,
    RuleType.WaWaJi,
    RuleType.ChongFengJi,
    RuleType.ChongFengWuguJi,
    RuleType.ZerenJi,
    RuleType.Huangleji,
    -2,
    YakuType.PingHu,
    -8,
    YakuType.DaDuiZi,
    YakuType.QiDui,
    YakuType.DanDiao,
    YakuType.QingYiShe,
    YakuType.QiDaDui,
    YakuType.QingDanDiao,
    YakuType.LongQiDui,
    YakuType.QingQiDui,
    YakuType.QingLongBei,
    YakuType.DiLong,
    -2,
    RuleType.ConfirmDealer,
    -3,
    RuleType.RoundDealer,
    -3,
];

const test3 = [
    RuleType.RoundNum,
    -1,
    RuleType.SystemCountdownTime,
    -1,
    RuleType.WholeHouse,
    -1,
    RuleType.OwnChicken,
    RuleType.BlackBoneChicken,
    RuleType.HighLowChicken,
    RuleType.TumoAddOne,
    RuleType.HigherAndHigher,
    RuleType.TwoRoomCard,
    RuleType.ChuiFengFi,
    RuleType.WaWaJi,
    RuleType.ChongFengJi,
    RuleType.ChongFengWuguJi,
    RuleType.ZerenJi,
    RuleType.Huangleji,
    -2,
    YakuType.PingHu,
    -8,
    YakuType.DaDuiZi,
    YakuType.QiDui,
    YakuType.DanDiao,
    YakuType.QingYiShe,
    YakuType.QiDaDui,
    YakuType.QingDanDiao,
    YakuType.LongQiDui,
    YakuType.QingQiDui,
    YakuType.QingLongBei,
    YakuType.DiLong,
    -2,
    RuleType.ConfirmDealer,
    -3,
    RuleType.RoundDealer,
    -3,
];

const test4 = [
    RuleType.RoundNum,
    -1,
    RuleType.SystemCountdownTime,
    -1,
    RuleType.WholeHouse,
    -1,
    RuleType.OwnChicken,
    RuleType.BlackBoneChicken,
    RuleType.HighLowChicken,
    RuleType.TumoAddOne,
    RuleType.HigherAndHigher,
    RuleType.TwoRoomCard,
    RuleType.ChuiFengFi,
    RuleType.Qianhouji,
    RuleType.WaWaJi,
    RuleType.XingQiJi,
    -9,
    RuleType.ChongFengJi,
    RuleType.ChongFengWuguJi,
    RuleType.ZerenJi,
    RuleType.Huangleji,
    RuleType.Tianting,
    -2,
    YakuType.PingHu,
    -8,
    YakuType.DaDuiZi,
    YakuType.QiDui,
    YakuType.DanDiao,
    YakuType.QingYiShe,
    YakuType.QiDaDui,
    YakuType.QingDanDiao,
    YakuType.LongQiDui,
    YakuType.QingQiDui,
    YakuType.QingLongBei,
    YakuType.DiLong,
    YakuType.BianKanDiao,
    YakuType.DaKuanZhang,
    -2,
    RuleType.ConfirmDealer,
    -3,
    RuleType.RoundDealer,
    -3,
];

const test5 = [
    RuleType.RoundNum,
    -1,
    RuleType.SystemCountdownTime,
    -1,
    RuleType.WholeHouse,
    -1,
    RuleType.OwnChicken,
    RuleType.BlackBoneChicken,
    RuleType.HighLowChicken,
    RuleType.TumoAddOne,
    RuleType.HigherAndHigher,
    RuleType.TwoRoomCard,
    RuleType.ChuiFengFi,
    RuleType.Qianhouji,
    RuleType.WaWaJi,
    RuleType.XingQiJi,
    -9,
    RuleType.ChongFengJi,
    RuleType.ChongFengWuguJi,
    RuleType.ZerenJi,
    RuleType.Huangleji,
    RuleType.Tianting,
    -2,
    YakuType.PingHu,
    -8,
    YakuType.DaDuiZi,
    YakuType.QiDui,
    YakuType.DanDiao,
    YakuType.QingYiShe,
    YakuType.QiDaDui,
    YakuType.QingDanDiao,
    YakuType.LongQiDui,
    YakuType.QingQiDui,
    YakuType.QingLongBei,
    YakuType.DiLong,
    YakuType.BianKanDiao,
    YakuType.DaKuanZhang,
    -2,
    RuleType.ConfirmDealer,
    -3,
    RuleType.RoundDealer,
    -3,
];

console.log(
    test1.length,
    test2.length,
    test3.length,
    test4.length,
    test5.length,
);

-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2022-12-30 08:28:44
-- 伺服器版本： 5.7.24
-- PHP 版本： 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `gosport`
--

-- --------------------------------------------------------

--
-- 資料表結構 `articlemessage_sublet`
--

CREATE TABLE `articlemessage_sublet` (
  `messageid` int(11) NOT NULL,
  `articleid_sublet` int(11) NOT NULL,
  `content` varchar(600) NOT NULL,
  `date` datetime NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `articlemessage_zeroda`
--

CREATE TABLE `articlemessage_zeroda` (
  `messageid` int(11) NOT NULL,
  `articleid_zeroda` int(11) NOT NULL,
  `content` varchar(600) NOT NULL,
  `date` datetime NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `broadcast`
--

CREATE TABLE `broadcast` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `text` varchar(600) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `side`
--

CREATE TABLE `side` (
  `sideid` int(11) NOT NULL,
  `adress` varchar(256) NOT NULL,
  `sideimg` varchar(100) NOT NULL,
  `cost` int(11) NOT NULL,
  `sidetype` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL,
  `sidename` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `goolemapurl` varchar(200) NOT NULL,
  `peakfee` int(11) NOT NULL,
  `offpeakfee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `sidedevice`
--

CREATE TABLE `sidedevice` (
  `sideid` int(11) NOT NULL,
  `park` int(11) NOT NULL,
  `bath` int(11) NOT NULL,
  `wifi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `sidetime`
--

CREATE TABLE `sidetime` (
  `id` int(11) NOT NULL,
  `sideid` int(11) NOT NULL,
  `weekstarttime` int(11) NOT NULL,
  `weekendtime` int(11) NOT NULL,
  `holidaystarttime` int(11) NOT NULL,
  `holidayendtime` int(11) NOT NULL,
  `peakstarttime` int(11) NOT NULL,
  `offpeaktime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `team`
--

CREATE TABLE `team` (
  `teamid` int(11) NOT NULL,
  `tname` varchar(100) NOT NULL,
  `sidename` varchar(100) NOT NULL,
  `week` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `level` varchar(100) NOT NULL,
  `teamimg` blob NOT NULL,
  `fee` int(11) NOT NULL,
  `text` varchar(600) NOT NULL,
  `starttime` int(11) NOT NULL,
  `endtime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `teamevent`
--

CREATE TABLE `teamevent` (
  `teameventid` int(11) NOT NULL,
  `addtime` datetime NOT NULL,
  `startdate` date NOT NULL,
  `starttime` int(11) NOT NULL,
  `enddate` date NOT NULL,
  `endtime` int(11) NOT NULL,
  `teamid` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `text` varchar(200) NOT NULL,
  `pay` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `teameventuser`
--

CREATE TABLE `teameventuser` (
  `teameventuserid` int(11) NOT NULL,
  `teameventid` int(11) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `teammoney`
--

CREATE TABLE `teammoney` (
  `teammoneyid` int(11) NOT NULL,
  `addtime` datetime NOT NULL,
  `date` date NOT NULL,
  `teamid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `fee` int(11) NOT NULL,
  `text` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `teampay`
--

CREATE TABLE `teampay` (
  `teampayid` int(11) NOT NULL,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date` date NOT NULL,
  `teamid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `item` varchar(100) NOT NULL,
  `fee` int(11) NOT NULL,
  `text` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `teamuser`
--

CREATE TABLE `teamuser` (
  `teamid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `leader` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  `username` varchar(100) NOT NULL,
  `userimg` blob,
  `tel` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`userid`, `email`, `password`, `username`, `userimg`, `tel`) VALUES
(1, 'abcd@gmail.com', '123', 'brad', NULL, '123456789'),
(2, 'efgh@gmail.com', '456', 'blue', NULL, '987654321'),
(3, 'aaaa', '1111', 'cccc', 0x433a5c66616b65706174685ce4b88be8bc892e6a7067, '3333'),
(4, 'aaaa', 'bbbb', 'cccc', 0x433a5c66616b65706174685ce4b88be8bc892e6a7067, '1234');

-- --------------------------------------------------------

--
-- 資料表結構 `userarticle_sublet`
--

CREATE TABLE `userarticle_sublet` (
  `articleid_sublet` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `content` varchar(600) NOT NULL,
  `ballgames` varchar(100) NOT NULL,
  `starttime` int(11) NOT NULL,
  `endtime` int(11) NOT NULL,
  `date` date NOT NULL,
  `county` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  `fieldname` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `cost` int(11) NOT NULL,
  `level` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `userarticle_sublet`
--

INSERT INTO `userarticle_sublet` (`articleid_sublet`, `userid`, `content`, `ballgames`, `starttime`, `endtime`, `date`, `county`, `area`, `fieldname`, `address`, `cost`, `level`, `amount`) VALUES
(1, 2, '比賽準時開始，請勿遲到222', '羽球', 9, 11, '2023-01-23', '台北市', '大安區', '大安森林公園', '106台北市大安區新生南路二段1號', 300, '普通', 3);

-- --------------------------------------------------------

--
-- 資料表結構 `userarticle_zeroda`
--

CREATE TABLE `userarticle_zeroda` (
  `articleid_zeroda` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `content` varchar(600) NOT NULL,
  `ballgames` varchar(100) NOT NULL,
  `starttime` int(11) NOT NULL,
  `endtime` int(11) NOT NULL,
  `date` date NOT NULL,
  `county` varchar(100) NOT NULL,
  `area` varchar(100) NOT NULL,
  `fieldname` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `cost` int(11) NOT NULL,
  `level` varchar(100) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `userarticle_zeroda`
--

INSERT INTO `userarticle_zeroda` (`articleid_zeroda`, `userid`, `content`, `ballgames`, `starttime`, `endtime`, `date`, `county`, `area`, `fieldname`, `address`, `cost`, `level`, `number`) VALUES
(1, 1, '比賽準時開始，請勿遲到', '排球', 8, 10, '2022-12-25', '台中市', '西屯區', '朝馬國民運動中心', '407台中市西屯區朝貴路199號', 500, '高手', 5);

-- --------------------------------------------------------

--
-- 資料表結構 `userbadge`
--

CREATE TABLE `userbadge` (
  `userid` int(11) NOT NULL,
  `badgeid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `userbadgeimg`
--

CREATE TABLE `userbadgeimg` (
  `badgeid` int(11) NOT NULL,
  `badgeimg` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `userbadgeimg`
--

INSERT INTO `userbadgeimg` (`badgeid`, `badgeimg`) VALUES
(1, 0xffd8ffe000104a46494600010100000100010000ffdb0084000a070815121215121414181818151a121a1818121812141d1815181f191c181918191c212e251c1e2c1f19182646262b2f343835351a2448403b333f2e353531010c0c0c100f101f12121e342c252b3437313634353534343436313e343431343434363d3434343435363434343634343434343134343734343434343534343434ffc000110800e100e103012200021101031101ffc4001c0001000203010101000000000000000000000405010306020708ffc4004210000202010302030602070505090000000102001103041221053141516106132232718142a10752627282919223a2b1c1d114334363731517538393a3b2c3d3ffc400190101000301010000000000000000000000000203040501ffc40028110003000201040201030500000000000000010203113104122141516122327191133342a1b1ffda000c03010002110311003f00fb344440111100444401111004444011110044440111100444401111004444011110044440111100444401111004444011110044d59722a2b3b1015412ccc68051c924f8002709eccfb6edadea6f856974e71bfbb05698ba3290e49e46e52e769ec157b1bb03e8111100444401111004444011110044440111100444401111004444011110044440111100444d791c2a96268004927c00e49807cc7f4c5ed21c38d7448d45d43e5ab1f05918d2fc9995891e4807669f3cfd18ead97aae90d9f89f229f50e8e05fdc89b3368b51d77a8657c608467dceee0edc49c0456f360aaabb4772a4f02c8fa7749f63b49a05c6d8f1efc832e96f364a66b39501dbe0828914b5c77b94de789a53ed9252dad9f438889711111100444401111004444011110044440111236ab52b8c02c7e63b400092cc79daaa3926813e8013d81804998955a5d6e439bdd644555742f8e98b1f81a9c64e28353632289eedc9db66d6789ec198889e811110044440111100c4a5f6ab0be4d265c18d82be71ee831246d0fc3b71c92a9bdabc76f71de5d4aceabf3601e4eedf618f22fdf9612175db2e8f52dbd155d1ba563d1e05c1856957b935b9dcfccee7c589ff0041c0026fd48b38d7c4e5c1fdd70e7f25324cd413767d381f859dcfeeaa3a7f8e559c4c3bbcc9bf9d9a6bc4b2fa222778ca22220188895397ab83c605f79fb57b718ffcca3bbc7e50dc8e4891ab995ba7a3d49be0b69073f54c28c50b82e3ba630d91c0f3f7680b57ad4accf84e5ff7aecc3f556f1a7dd41b61e8c587a09bb0a8c6a1100551d95005007a01c098afaf94f52b658b13f644f68bda8ff63d2e4d51d3b95c7b3866c685b732aad004b0e5877038b9f35d5fe99f54dfee74b8507fcc6c99bff895933f4c5d600c58b46adf13b0c8e3c916c283f56b3fc13e48ab7da69c392ae3b9a22d24f47d0bfef53a964e03614bfd4c4491f4dccc3f9cbdf637da1ea9acd663c7fed2cd8d4abe6bc5a50ab881e412a8082d5b451bee7b299c3fb1decbea7a865ac236e35203e56bda9e63f69abf08e7b5ed06c7e81f677a161d0e118708f5676e59dfb1663e7c015d8000097112de22566bba86d271e2a6c9c5df2b8c1eccf4413e8a393e82d846ad4adb612df846cd6ebf61d88bbf2116101a001b019db9d8960f3449a3409153c69b4d4dbddb7e4228b55051dcaa2d9d8b75e249a164d0a8fa1c031a9e4966259dda8b3b1eece7cf8028500000000001377f1315751dfc7058a3468ea1c6cc9ff84eac7f74828e4fa05766fe112d2546a08756c6df2b8656fdd6147fc64ce999db261c6edf33229603c1e86e1f63625bd36557b95e88dce899111351011110044440111100c4a8ea7633e13e1b350bfc44e223f25696f293aa9f79931ae32a5f1392fbac8456471c81f88ee53b78b1e201b94e7fedb253fa918c8e145b1a1febd801e249e2bc668c2f9f7974c2bc2ed439dce3e18db9daaacd5f0a70c14f07b77966895feb33739b867b1f77b2fa7bf069393515f3e207fe9e461fcfde0b9e0eab500f7c4de9b1d3f3dedfe136e5caaa0b12000092490000392493d84e73ad7b4634da64d736167d3b940195943ec7f91f6350da78eec0fc42c0e6ae797353fc1ec876cae4be4ea7907cf82f914706457a1e6c1c257d06e333a9eb989000a77e46f9717c8e7f6995a8aa0ee588fa5920187d3b5c9a8c499b136e4c8a194f6e3c88f020d823c0832438b12b5d6e49daa4897f493e0d0713e5e73b07bff869631afa153ce43db97e2c0215648b9a3df91dc47bff004fce64bbbc8f6decb14a5c122e6ad46754467760a88acccc7b2aa8b627e8048d8f585ffdd2364bec718b5aff00a8c427db75fa4f1d47d9a6d6e3f75a8c853112a5b1e036d90020856c8ca36af1ca85be3e696e2e9aedaf1a5f246ae51f03ea39f3f54d6e47c78dddf335aa229765414aa0d760abb41278ee67d13d92fd1213b72750200e0fb8c4d64fa64c8bdbe887f8bc27d47a4746d3e8d3dde9f0ae35f1d83963e6cc7963ea4932c676d24969199bd9a349a5c785171e24544514aa802803d00e04df12aba9eb597fb2c669d8025e8118d4f1ba8f058d1a1dac73c77f2ed4ced849b7a4675fae3b8e2c55bff1b1e571022c58f17208217d413c55c5c185718a17c92cc58db331eecc7c49ff0020050004f1a7c6b8d422f617c925892792ccc796626c927924cdb738b9f3d657f5f0698848da8de305f89ab74f41a53ded2d225a3266ce82693263bbd9972ffee1f7c07d86403ed358333d29eb3e74f35c0ff566de87f2c4b35f435ac9af9457957e25cc444eb99c444401111004444029bda3eacba5c0d91982d02771e76a0f99ebc481c01e2cca38dd2b7a36b38c03e0033e26ceaa096755b4e5dec872def05b0aa6f16ef28ff493a3cbacd33ae10580caaac1017271e30fb8851c93efb68207ea2f948ffa35f65df438b264ca08c998a8da7ba634bda0f912589af2db746c4c39f2c76b6f94f4916ccb3bd6c826a67b9132940eaccdb48dd40bb2837c1252e9bee0d4d5a9eab8318b7cc83c86e058fa2a8e58fa004ce73bbaf08b924889ed768f26a341a8c58af7b210a071ba882507ef282bfc53e27933eaf56b8b439333b63c14130952594a8da1762aee6602d403647353ef1d3359eff1fbd5ad8c58279ed5254eef23b95b8f015e372585e6eb93e3e3fce5d87a878539d1e3855e4a4f633a5be93458f164e1eddd9457c1bd8b6ce3c403cfadf84ba63539bd5eb5b2b121884fc0aac5432f83357cdbbbd1e00ae2ec983a7d6361cc0066d8cc8aeac5980dff00086404fc34c549ae08dd62e88aeb1badd3e5f934ac15d9dc74b971860548b06c11e626fe89a3c2ea43a6fc989802d949c96400532286e16c107e10003b80ed350333a7cbeef3a64fc2f58dff0088ff0066c7ce9ced03fe69f2967496a7224fd99b2cee4e966622764ca262240ea9aff728081b9dc8545bab63cd93e0a00249f206acd03e3692db06aeabd40e3ac6947230be7918d39f8d8788b1407e23e40332d6635af1249e599b92cde2cc7cf81fc8550004c63422cb12ccc6d98f763fe407603c0013dce2f519de57e3835c476afb3373d079e2266266cdd3dab4d00c23966288bbdc5580682df62edf847e6476064a62a9ea56d9e3692db24b3000924000124934001dc93e027be968cd95b2ed214a2a82c0a962189b553cede4f26afc2c7337e9fa68043e43bd872055229fd95f13fb46cf7aa06a594ea74dd2b87dd4fc99ef277784662226e2a11110044440111100f9fe8354d832e4dcecc8d9f52ae1d8b05bcce1197c140e01aa14493c8e7a1cfa64714ea0d76bee0f9823907e9283dafd06c77256f1ea3bf1c07db4ea7c3e20037a9dd2d7a4eb3de60c6ee6db680c7cdd7e173fd4a671baa8d56cdee65c4d4fb5a7fb9cb7b5fd2131ba6755003808fe3f1aee6426fcc171c9fc23ce73caa07615f4e27d2faa69935189f0b12038e180b2ac0828e01e2c3007ed381d1f4b77c8e99176fba60a410482d41b70fd65208a3f5f11c6ae8f2774f6be57fc3c9f83a8f61b501f4ce83b63cb917ebbc2e427fa9d87da742edc1e689bafaca2f67b19c6b9541bfed05923c7621ff02b2c9b9987a85acaff0071a38dd16a5951032d52202a6ad480011f5078fb4c2a97745e6d9d17fa98027ec093f6973aee885dd9f1b05dc49647048de7bb2b036b7c9228d937c737bfa6749f764647219c5d6dbda97c1abe49ab17c704f1dee6f2ceb66e7d44f67de8b3633c644dca54922c1163b8f51ea3bfda7b222674612efa6ea4e5c4ae68372180ec1d495703d3703264a0e8f9766564278c8030fdf5a571e96bb081fb2c7ce5fceee1bef84cc74b4f425175fc34d8b51b6c20c88e7c51321425c7a06c78efd0927e597b3c6440ca548041041079041e0832572aa5cbf6789e9ece6ee67748e58a3361624b2102cf76422d5efc491c13fac1bca64e4e4f901fccce0dc39a72fd1b53dad9bee79c991541662140ee588007d499e71333b6cc6bbd856ee76aa5f20bb78771c0b637daac8b6d2f495523239f78ebca961414d11689ced344fc5cb7245d712fc3d2d64f3c2f92159122bf49a4c99c824363c7e6c36e471fb2a79c6beac3777a0bc34bcd2e9971a85450abc9a1e249b249ee4924924f249e64889d5c58671ad2466aa75c99888969111110044440111100c4ccd5972aa2b3b300aa0966620000724927b00241c9d6700adb90642d7b570ff6ac6b82692e85d0dc680be489e37ae41bfa868933e26c5905ab0e7c082390c0f8104020f81027378b48da555c2e781c2e43559093ddbb04724dedec49f86f902d9b599dc7c2898471ce5232b7a8288c147d439fa48f9f4bef15972e47c8ac086562114ab0a2a5502ee522c535f7987aac986a74df9fa2ec6a971c1a4c8daad0a65a2c1830e03e36646af2254fc43d0d8f4933168c202aa7804ed06fe15fd5bf100dd790a1e13cb254e64d397b96683569b02e3408b743c5896249ee598f24cda444c54f1b6ded83d4d79b28452cd742be5566249200015412c492050049b9eee56f5105f262c4182057c598b3161bc6260c51028f888da09048af84d30b1252b6cf1bd2318f5ed91d4aec4c26d4e47b760f5bb63a02063e07725a89552031a13f463de02c1ed417520e37c6c1918a90c0b71c83f8458a3d8cd0fa936093c9e07af8dfdaaefd3ce7ad12ff006e5c13f1a397058905c7b954217b0f851bd4dc9d3973a4b4474d3e496f81b82b41d486427b6e1e07c688254d734c65de8752b9b1ae45361be868834ca6bc41041f50640949d2758747a96d3e4b1873b9389ff0abb92425f61df6577b5535f11334f43974dcbf6579677e4ed262243ea1d431e05dd91aacd281cb3b7eaaa8e49f1f4009340133a8de8a0a9f6a34d413503f090b93d71b1f849fdd7239f0567947a876d8db4126ae9080cd5c9552780c45804f6267bd7750c9a96b71b541b4c4082051f859c8f99bb1fd55355646e31cb19cbcf5357b46a896a74cee3a72e31890e103632ab295eccac2c35f737776793725ce7bd9066381948f803bfbb3e6adf130f501cb8b1c550f033a19d387b94cccfc3d19888923c111100444401111004444029fafb36d54de551f7ab840bb9811d816042ad6eb357da88f1aad2eb1ce4d878042fc6e18b39e46db501411c727bd9a1e32f3a9e90e401914175f94333202a594ba9a047217c41e40edde5760d2e6c6016c16c40bf73911c03e22dc271f69cfeaf1e4a7b95b5a2ec6e52f248b9991f26a42fccb917eb8b2b01f56552a3f9cd4bd4f013b7dfe3ddfaa5d037dd49b9ceac76b94ff0082e549fb26cc32df791755ac54c6d937290b45a8834808dedc792ee3f692e4747a686c3e5f9cf0719f292a279b043da7ca47d59d81725123136f6157f06d657e2ac90ac5a8724a896913d4f41959ace9c8cc9914d152c455105594823e86c1faa89e9536f69271e995176af0bf857c13d17c97d3c3c28713c3211e11b08db81ec7d27b7c619595802ac086079054f041f49e30a50facdb3c06ee97a9241c4e497c607c4dff00110fcafea78a3dbe2078008be3f54b93deb7bf3bb300031ec029edeec7e1c648355df6fc56c1a5d75acad8b11d46300e4c1f12ee25414247bc4622fe12b7e068aa9a254499a8d3e3ea1a74cb8db69a251eaca9ecd8dd6f9162996fbaf81008eac53cf8b5bf2bfd947e8afa397ddc81c92c694282cccdc9a551c93409e3c013d81979d37d9e2f4fa81438230837ff00aac0d3787c238ef6581a1cdea333627dae0a3a9e68d9471f2bab57c484766ae45823ba8ecbd9debabaa420d2e44f9d07e4e3f64d7ad1e2cf73e74d13dcd5728f723ad6d705caa80000280ec07153dc44e81408888022220088880222200888802222009e48be0cf5100afd4f48d3e5bf79a7c4f777bf1a35d8a3dc79712b7420aa6c3778cb21be49d876ab1f5650adfc53a1946ebb7519d47e218b21fe2529ff00d3f9cc5d6cef1efe0b31bd51b22260ce39a4cc4c5c180089e67a0608807989e84c18061d0302ac010c082080410782083dc54e731ebbfecb390223e4c795fe14670063cb5c1dc416d8c0513f11042f07719d1ce6baee0f7b8f2a0ee45afefa10c9fde5597e0c8e2b699e3954bc943d5ba9e4d56419326db00aa845002a920edbeedd8773dee80ba98e8e9a83943e9159b22134547c02eb72646242ed22ad49be011c8045a7b1ba7d2677db9edb23738d1cd23281ba801f335592ac4820581c357d1f1625450aaa1540a0140000f200769d1c789d3ef6caaed2fc52338c9a16003c5806c0fa1a1736444da502222008888022220088880222200888802222018955ac159c7ede33fdc61ffe9f9cb5953d56d72607ae09c98dbb701d7703fd58d57f884a73cef1b44a1fe48f2dde218cc5ce0be4d6089e61dc0ee6a476d720f33f411a0489906451ae4f5fe53d8d521fc4234c126246ff006a41f884d397a801f2f31a60dfa9c8114f9f84a8039fbcf79329736668cf9362339fc0acdfd209ff0029348f4aff0066fd8cc9934ba6cad9c26ec5a771b109752514a90db800c0d1ba3c89f4941c0177ea6b99a3a7e9fdd61c78876c688bfd200ff292677a654f063aa6f9331112644444401111004444011110044440111100444401236af4eb950e36ec6bea0836ac3c8820107cc0926201c865d565c2feef2a8bb2118fcb9077b43e75dd4f228f714c72dd418f6007e73a6d4e9d3229475565356ac03035c8e0face67adf4418717bcc393200ac96ac57282198293b9c16e2c1f9bb0339b9ba2d6ea78f82f8cbe9915f216ee6e78c3bb2314c28ce54d315daa887c9dd8d5fec8b61638e652663b85b65c8cb4cfb4118d76a15dc1b6052c3916ac483ccfa769b02e345c68aaaaa00554015401d82a8e0091c1d34df96c95db9e0e793a1e722d8e307f5433b0bfdeda3fc247cfd373a72d8b70f3c2def287a821589f45533afa999a9f4989ae0a965a3834c8092a0f23ba9b0cbfbca795fb89ee761aad163ca00c98d5c0edbd55a8f98bec6406f67b0592038bf2cb9a87d14b103ec267ae85ff008bfe49accbda39e13674fc2ba8cbeeb770b4cfdf95522d01ec49b008f007c2c5c0eaba7f71a8c88598ade2dbb999ad7200a2c76e5c3af6f0927d9dcdb352800a16f8cf140064de2beeabf9cab1e3edcaa6be49d56e768ef222275cca222200888802222008888022220088880222200888802222009ab3e157464616ae195879861447f29b6201c70f677329188b2ba1773ef76a83ee9c36f4c89b85b12c4865e2c2fc2a168f5f3312b8c6a77af67adb7c99888961e0888805375ee90750a0a305750c1588b0435707c8821581f02a3822c181d3f4395b3abbafbb2abfda0a2eaccbf27bb7b1c5be4e6ac8ab0a6a74f12aac5354a9f2892a6968cc444b4888888022220088880222200888802222008888022220088880222200888802222008888022220088880222200888802222008888022220088880222200888802222008888022220088880222200888802222008888022220088880222200888807ffd9);

-- --------------------------------------------------------

--
-- 資料表結構 `userteam`
--

CREATE TABLE `userteam` (
  `teamid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `tname` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `articlemessage_sublet`
--
ALTER TABLE `articlemessage_sublet`
  ADD PRIMARY KEY (`messageid`),
  ADD KEY `articleid_sublet` (`articleid_sublet`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `articlemessage_zeroda`
--
ALTER TABLE `articlemessage_zeroda`
  ADD PRIMARY KEY (`messageid`),
  ADD KEY `articleid_zeroda` (`articleid_zeroda`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `broadcast`
--
ALTER TABLE `broadcast`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `side`
--
ALTER TABLE `side`
  ADD PRIMARY KEY (`sideid`);

--
-- 資料表索引 `sidedevice`
--
ALTER TABLE `sidedevice`
  ADD PRIMARY KEY (`sideid`);

--
-- 資料表索引 `sidetime`
--
ALTER TABLE `sidetime`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sideid` (`sideid`);

--
-- 資料表索引 `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`teamid`);

--
-- 資料表索引 `teamevent`
--
ALTER TABLE `teamevent`
  ADD PRIMARY KEY (`teameventid`),
  ADD KEY `teamid` (`teamid`);

--
-- 資料表索引 `teameventuser`
--
ALTER TABLE `teameventuser`
  ADD PRIMARY KEY (`teameventuserid`),
  ADD KEY `teameventid` (`teameventid`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `teammoney`
--
ALTER TABLE `teammoney`
  ADD PRIMARY KEY (`teammoneyid`),
  ADD KEY `teamid` (`teamid`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `teampay`
--
ALTER TABLE `teampay`
  ADD PRIMARY KEY (`teampayid`),
  ADD KEY `teamid` (`teamid`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `teamuser`
--
ALTER TABLE `teamuser`
  ADD PRIMARY KEY (`teamid`,`userid`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`),
  ADD KEY `userid` (`userid`),
  ADD KEY `userid_2` (`userid`);

--
-- 資料表索引 `userarticle_sublet`
--
ALTER TABLE `userarticle_sublet`
  ADD PRIMARY KEY (`articleid_sublet`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `userarticle_zeroda`
--
ALTER TABLE `userarticle_zeroda`
  ADD PRIMARY KEY (`articleid_zeroda`),
  ADD KEY `userid` (`userid`);

--
-- 資料表索引 `userbadge`
--
ALTER TABLE `userbadge`
  ADD PRIMARY KEY (`userid`,`badgeid`),
  ADD KEY `badgeid` (`badgeid`);

--
-- 資料表索引 `userbadgeimg`
--
ALTER TABLE `userbadgeimg`
  ADD PRIMARY KEY (`badgeid`),
  ADD KEY `badgeid` (`badgeid`);

--
-- 資料表索引 `userteam`
--
ALTER TABLE `userteam`
  ADD PRIMARY KEY (`teamid`),
  ADD KEY `userid` (`userid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `articlemessage_sublet`
--
ALTER TABLE `articlemessage_sublet`
  MODIFY `messageid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `articlemessage_zeroda`
--
ALTER TABLE `articlemessage_zeroda`
  MODIFY `messageid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `broadcast`
--
ALTER TABLE `broadcast`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `side`
--
ALTER TABLE `side`
  MODIFY `sideid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sidedevice`
--
ALTER TABLE `sidedevice`
  MODIFY `sideid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sidetime`
--
ALTER TABLE `sidetime`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `team`
--
ALTER TABLE `team`
  MODIFY `teamid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `teamevent`
--
ALTER TABLE `teamevent`
  MODIFY `teameventid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `teameventuser`
--
ALTER TABLE `teameventuser`
  MODIFY `teameventuserid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `teammoney`
--
ALTER TABLE `teammoney`
  MODIFY `teammoneyid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `teampay`
--
ALTER TABLE `teampay`
  MODIFY `teampayid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `userarticle_sublet`
--
ALTER TABLE `userarticle_sublet`
  MODIFY `articleid_sublet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `userarticle_zeroda`
--
ALTER TABLE `userarticle_zeroda`
  MODIFY `articleid_zeroda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `userbadgeimg`
--
ALTER TABLE `userbadgeimg`
  MODIFY `badgeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `userteam`
--
ALTER TABLE `userteam`
  MODIFY `teamid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `userarticle_sublet`
--
ALTER TABLE `userarticle_sublet`
  ADD CONSTRAINT `userarticle_sublet_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);

--
-- 資料表的限制式 `userarticle_zeroda`
--
ALTER TABLE `userarticle_zeroda`
  ADD CONSTRAINT `userarticle_zeroda_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);

--
-- 資料表的限制式 `userbadge`
--
ALTER TABLE `userbadge`
  ADD CONSTRAINT `userbadge_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`),
  ADD CONSTRAINT `userbadge_ibfk_2` FOREIGN KEY (`badgeid`) REFERENCES `userbadgeimg` (`badgeid`);

--
-- 資料表的限制式 `userteam`
--
ALTER TABLE `userteam`
  ADD CONSTRAINT `userteam_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/**
 * 探宝节点 · 发现点 → 打游戏过关 → 大墓
 */
(function () {
  "use strict";

  window.MATCH3_EXPEDITION = {
    tombTiers: [
      { tier: 1, name: "I 级祭祀坑", icon: "🕳", desc: "表层探方 · 陶片与象牙" },
      { tier: 2, name: "II 级纵目墓", icon: "👁", desc: "青铜面具阵列 · 神格之室" },
      { tier: 3, name: "III 级神树墓", icon: "🌳", desc: "通天青铜树 · 九鸟栖枝" },
      { tier: 4, name: "IV 级金沙墓", icon: "☀", desc: "太阳神鸟金箔 · 河床秘藏" },
      { tier: 5, name: "V 级天书墓", icon: "📜", desc: "符号墙 · 古蜀终极档案" },
    ],
    chapters: [
      {
        nodes: [
          { id: "c0n0", name: "N15 险情室", level: 0, x: -3.5, z: 2.2, discover: ["chenli", "二〇六五，第十七日复核。东壁回压、湿度曲线与守关层震感都叠进避险档——先校准 N15，再动铲。"], artifactHint: 3 },
          { id: "c0n1", name: "陶片层", level: 4, x: -2, z: 0.8, discover: ["wangdun", "陶片！成片的！刘哥别装忙，回压表针一抖，胖爷绳就先拴紧！"], artifactHint: 3 },
          { id: "c0n2", name: "象牙露头", level: 9, x: -0.5, z: -0.3, discover: ["yangxue", "象牙饰露头了。二〇六五光谱与湿度都显示它下面还有朱砂——先停半步，整块记录。"], artifactHint: 4 },
          { id: "c0n3", name: "金粉纹层", level: 14, x: 1, z: -1.2, discover: ["jinyaliu", "金粉！刘哥只看看。王墩小点声，守关层震感一起来，我心跳都得分开记档！"], artifactHint: 1 },
          { id: "c0n4", name: "祭祀面", level: 18, x: 2.2, z: -2, discover: ["hutan", "罗盘疯了。前面是祭祀面，气不稳，铜铃再响也先退半步。"], artifactHint: 0 },
          { id: "c0n5", name: "青铜门墓", level: 19, isTomb: true, discover: ["chenli", "门缝里有光，金杖纹样也对上了。I 级大墓——守关层未降，停步等我。"], artifactHint: 0 },
        ],
      },
      {
        nodes: [
          { id: "c1n0", name: "门后甬道", level: 20, x: -3.2, z: 2, discover: ["yangxue", "二〇六五，超越期第十七日。门后风带着铜锈，N15 回压在这里由东北折向南。"], artifactHint: 0 },
          { id: "c1n1", name: "封土区", level: 24, x: -1.8, z: 0.5, discover: ["yangxue", "封土层！消除相邻文物等于震土，二〇六五模型提醒：湿度、回压和震感都要留住。"], artifactHint: 3 },
          { id: "c1n2", name: "金杖影", level: 29, x: -0.3, z: -0.8, discover: ["narrator", "黑暗中一根金杖的轮廓。王权与神权，在一根杖上。"], artifactHint: 1 },
          { id: "c1n3", name: "神格位", level: 34, x: 1.2, z: -1.8, discover: ["chenli", "面具不是装饰，是容器。记录每一面。"], artifactHint: 0 },
          { id: "c1n4", name: "千面阵", level: 38, x: 2.5, z: -2.8, discover: ["wangdun", "妈呀，全是眼睛！胖爷先消一层——金牙刘闭上你的估价嘴，守关层震感还亮着红档！"], artifactHint: 0 },
          { id: "c1n5", name: "纵目神墓", level: 39, isTomb: true, discover: ["hutan", "II 级大墓。纵目之神，在等我们读完层位——气稳再进。"], artifactHint: 0 },
        ],
      },
      {
        nodes: [
          { id: "c2n0", name: "树根层", level: 40, x: -3, z: 2.5, discover: ["wangdun", "神树！根比胖爷腰还粗——等等，东壁闷响又来了！金牙刘，双绳先拴上！"], artifactHint: 2 },
          { id: "c2n1", name: "树腰洞", level: 44, x: -1.5, z: 1, discover: ["hutan", "树腰有榫眼。二〇六五的罗盘与回压曲线都指向第三枝，再往南——气稳再爬。"], artifactHint: 2 },
          { id: "c2n2", name: "半百祭台", level: 49, x: 0, z: -0.2, discover: ["chenli", "第五十层探方。N15 险情室已把方位句续成「目、树、鸟——过树向南」，钉上二〇六五避险图。"], artifactHint: 5 },
          { id: "c2n3", name: "九枝叉", level: 54, x: 1.5, z: -1.5, discover: ["yangxue", "九枝九鸟，与《山海经》互文。"], artifactHint: 5 },
          { id: "c2n4", name: "树顶平台", level: 58, x: 2.8, z: -2.5, discover: ["narrator", "树顶有金沙碳迹。两个文明，一条河。"], artifactHint: 5 },
          { id: "c2n5", name: "神树天墓", level: 59, isTomb: true, discover: ["hutan", "III 级大墓。树通天地，墓通古今。"], artifactHint: 2 },
        ],
      },
      {
        nodes: [
          { id: "c3n0", name: "金沙渡口", level: 60, x: -3.3, z: 2, discover: ["hutan", "涉水。金箔区禁声。"], artifactHint: 5 },
          { id: "c3n1", name: "象牙梯", level: 64, x: -1.6, z: 0.6, discover: ["wangdun", "象牙当梯子？古蜀人真敢想。"], artifactHint: 4 },
          { id: "c3n2", name: "金箔层", level: 69, x: 0.2, z: -0.5, discover: ["yangxue", "0.2 毫米金箔。呼吸都能吹飞。"], artifactHint: 5 },
          { id: "c3n3", name: "陶盉窖", level: 74, x: 1.4, z: -1.6, discover: ["jinyaliu", "陶盉里……是酒？三千年了还香？"], artifactHint: 3 },
          { id: "c3n4", name: "四鸟坛", level: 78, x: 2.6, z: -2.6, discover: ["chenli", "四鸟绕日。古蜀与中原，在此握手。"], artifactHint: 5 },
          { id: "c3n5", name: "太阳神墓", level: 79, isTomb: true, discover: ["narrator", "IV 级大墓。太阳在地下升起。"], artifactHint: 5 },
        ],
      },
      {
        nodes: [
          { id: "c4n0", name: "符号廊", level: 80, x: -3.4, z: 2.2, discover: ["chenli", "符号墙开始。目、树、鸟——与棋盘同源。"], artifactHint: 0 },
          { id: "c4n1", name: "目字层", level: 84, x: -1.7, z: 0.8, discover: ["hutan", "目。纵目。看穿了三千年的雾。"], artifactHint: 0 },
          { id: "c4n2", name: "树字层", level: 89, x: 0, z: -0.4, discover: ["yangxue", "树。神树。数据与神话，重合了。"], artifactHint: 2 },
          { id: "c4n3", name: "鸟字层", level: 94, x: 1.6, z: -1.7, discover: ["wangdun", "鸟字！胖爷识字不多，但这字认识！"], artifactHint: 5 },
          { id: "c4n4", name: "续字前庭", level: 98, x: 2.9, z: -2.8, discover: ["narrator", "墙上只有一个字：续。"], artifactHint: 2 },
          { id: "c4n5", name: "天书终极墓", level: 99, isTomb: true, discover: ["chenli", "V 级终极大墓。百关杀青。文明不灭。"], artifactHint: 0 },
        ],
      },
    ],
  };
})();

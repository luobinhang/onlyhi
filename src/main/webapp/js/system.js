
$(function () {
    var i = 0;
    function scroll1() {
        scroll("#winterAll", function () {
            if(i==1){
                return false;
            }
            else {
                i=1;
                $("#winterAll li").eq(0).find("p").addClass("one");
                $("#winterAll li").eq(1).find("p").addClass("two");
                $("#winterAll li").eq(2).find("p").addClass("three");
                $("#winterAll li").eq(3).find("p").addClass("four");
                $("#winterAll li").eq(4).find("p").addClass("five");

            }
        })
    }
    scroll1()
})

var spring = {
    primary: {
        Chinese: [
            {subject: "images/system/LV1.png", grade: "0-60分", content: "1.学习习惯养成<br> 2.字音字形巩固<br> 3.认识病句类型<br> 4.课内知识梳理<br> 5.能够连贯写事"},
            {
                subject: "images/system/LV2.png",
                grade: "60-70分",
                content: "1.学习兴趣培养<br> 2.多音字、易错字专题精炼<br> 3.辨析病句原因<br> 4.激发阅读兴趣<br> 5.写作语言准确完整"
            },
            {
                subject: "images/system/LV3.png",
                grade: "70-80分",
                content: "1.正确使用标点符号<br>2.成语、俗语、谚语等汇总<br> 3.修改病句技巧传授<br> 4.阅读题策略总结<br> 5.写作语言生动"
            },
            {
                subject: "images/system/LV4.png",
                grade: "80-90分",
                content: "1.专题预习领先一步<br>2.古诗词基础积累<br> 3.阅读易错题突破<br> 4.课外阅读拓展提升<br> 5.熟练写出常用文体"
            },
            {
                subject: "images/system/LV5.png",
                grade: "90-100分",
                content: "1.小升初复习规划<br>2.小升初考点、重难点梳理<br> 3.小升初基础知识满分技巧<br> 4.小升初阅读题型精练<br> 5.小升初写作技巧"
            },
        ],
        math: [
            {subject: "images/system/LV1.png", grade: "0-60分", content: "1.数学基本计算、整数、小数、分数等基本概念的传授与巩固<br>2.对应知识点基础专题解惑答疑<br>3.数学学习兴趣培养"},
            {subject: "images/system/LV2.png", grade: "60-70分", content: "1.各年级对应基础例题讲解<br>2.基本知识概念深入强化理解<br> 3.各类习题答疑，解题水平提升"},
            {
                subject: "images/system/LV3.png",
                grade: "70-80分",
                content: "1.数值计算、应用题、图形三大专题查漏补缺<br>2.数学考点集中训练，各类题型解题策略提点<br> 3.将数学与生活联系，进一步激发兴趣"
            },
            {subject: "images/system/LV4.png", grade: "80-90分", content: "1.小升初专题提前预学<br>2.基本数学思维拓展训练<br> 3.期末考点密集轰炸<br> 4.单元易错题集中讲解"},
            {
                subject: "images/system/LV5.png",
                grade: "90-100分",
                content: "1.选择题、填空题、计算题分题型轰炸训练<br>2.历年小升初难题选讲<br> 3.小升初典型压轴题对应专项抽解<br> 4.考前心理疏导"
            },

        ],
        English: [
            {subject: "images/system/LV1.png", grade: "0-60分", content: "1.音标掌握扎实自然拼读流畅<br>2.词汇发音准确拼写汉译正确<br> 3.课文朗读无误内容理解正确"},
            {subject: "images/system/LV2.png", grade: "60-70分", content: "1.基础词汇短语强化巩固<br>2.基础语法知识讲练结合<br> 3.基础词汇语法专项练习"},
            {subject: "images/system/LV3.png", grade: "70-80分", content: "1.重难点词组强化巩固<br>2.完型阅读等专项练习<br> 3.写作题型归纳和技巧<br> 4.兴趣提升多口语培养"},
            {
                subject: "images/system/LV4.png",
                grade: "80-90分",
                content: "1.完型阅读技巧讲解归纳<br>2.写作范文模板解析拓展<br> 3.听力专题训练强化技巧<br> 4.听说读写综合潜力培养"
            },
            {subject: "images/system/LV5.png", grade: "90-100分", content: "1.难点语法解析&突破<br>2.考点难题解析&突破<br> 3.学习阶段规划&指导"},

        ]
    },
    middle_o_t: {
        Chinese: [
            {subject: "images/system/LV1.png", grade: "0-60分", content: "1.字音字形辨析<br>2.古诗句默写通关<br>3.病句辨析修改<br> 4.语言表达创新<br> 5.作文准确审题"},
            {
                subject: "images/system/LV2.png",
                grade: "60-72分",
                content: "1.名著阅读与文化文学常识积累<br>2.综合性学习题型归纳<br>3.文言文实词虚词各个击破<br> 4.现代文阅读文体知识总结<br> 5.作文结构梳理"
            },
            {
                subject: "images/system/LV3.png",
                grade: "72-90分",
                content: "1.修辞方式灵活运用<br>2.诗词鉴赏题型归纳 <br> 3.常用文言词语及句式总结 <br>4.现代文快速阅读技巧 <br>5.作文语言锦上添花"
            },
            {
                subject: "images/system/LV4.png",
                grade: "90-110分",
                content: "1.中考专题提前掌握<br>2.综合性学习答题技巧 <br> 3.文言文翻译技巧 <br> 4.现代文阅读常考试题归纳 <br> 5.作文思路拨云见日"
            },
            {
                subject: "images/system/LV5.png",
                grade: "110-120分",
                content: "1.中考真题选讲<br>2.课外诗词积累练习 <br> 3.课外文言文拓展训练 <br> 4.现代文阅读答题技巧 <br> 5.作文写作技巧指导"
            },
        ],
        math: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.有理数、实数、勾股定理、方程、一次函数、三角形等基本概念的巩固<br>2.对应知识点基础专题答疑"
            },
            {
                subject: "images/system/LV2.png", grade: "60-72分", content: "1.初一、初二各年级对应基础例题讲解<br>2.各类习题答疑提升"
            },
            {
                subject: "images/system/LV3.png", grade: "72-90分", content: "1.代数、几何、函数、统计四大专题查漏补缺<br>2.选取数学典型考点集中训练 <br>3.各类题型解题策略提点"
            },
            {
                subject: "images/system/LV4.png",
                grade: "90-110分",
                content: "1.中考专题提前预习<br>2.数学思维拓展训练 <br> 3.期末考点轰炸训练 <br> 4.单元易错易混题，集中讲解"
            },
            {
                subject: "images/system/LV5.png", grade: "110-120分", content: "1.选择题、填空题、计算题等专题轰炸训练<br>2.历年考题难题选讲"
            },

        ],
        English: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.基础词汇短语强化巩固<br>2.基础语法知识讲练结合 <br> 3.基础词汇语法专项练习"
            },
            {
                subject: "images/system/LV2.png", grade: "60-72分", content: "1.词汇语法快速提高<br>2.选择语法等专项训练 <br> 3.语篇理解强化 & 提高"
            },
            {
                subject: "images/system/LV3.png", grade: "72-90分", content: "1.重难点词组强化巩固<br>2.完型阅读等专项练习 <br> 3.写作题型归纳和技巧"
            },
            {
                subject: "images/system/LV4.png", grade: "90-110分", content: "1.完型阅读等技巧讲解归纳<br>2.写作范文模板解析 & 拓展 <br> 3.历年中考真题选讲 & 详解"
            },
            {
                subject: "images/system/LV5.png", grade: "110-120分", content: "1.难点语法解析&突破<br>2.考点难题解析 & 突破 <br> 3.学习阶段规划 & 指导"
            },
        ],
        Physics: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.概念理论巩固<br>2.基础知识提炼"
            },
            {
                subject: "images/system/LV2.png", grade: "60-70分", content: "1.基础例题精析<br>2.题型归纳总结 <br> 3.激发物理兴趣"
            },
            {
                subject: "images/system/LV3.png", grade: "70-80分", content: "1.声、光、力专题查漏<br>2.典型考点提升"
            },
            {
                subject: "images/system/LV4.png", grade: "80-90分", content: "1.中考专题训练<br>2.物理思维拓展 <br>3.期末考点轰炸"
            },
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.专题疯狂磨杀<br>2.中考真题精讲 <br>3.经典压轴抽解"
            },

        ]
    },
    middle_th: {
        Chinese: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.字音字形巩固<br>2.诗句默写高频总结 <br>3.病句类型分析 <br>4.语言表达突破 <br>5.作文材料积累"
            },
            {
                subject: "images/system/LV2.png", grade: "60-72分", content: "1.诗词鉴赏答题技巧<br>2.病句答题技巧总结 <br>3.文言文实词虚词巩固 <br>4.现代文阅读题型攻破 <br>5.考场作文结构解析"
            },
            {
                subject: "images/system/LV3.png", grade: "72-90分", content: "1.基础积累提升训练<br>2.综合性学习题型解读 <br> 3.文言文高频实词总结 <br> 4.现代文阅读答题技巧 <br> 5.作文分类写作"
            },
            {
                subject: "images/system/LV4.png", grade: "90-110分", content: "1.综合性学习能力提升<br>2.文言文重点题型突破 <br>3.阅读经典例题解析 <br>4.写作模板总结 <br>5.中考真题模拟试题演练"
            },
            {
                subject: "images/system/LV5.png", grade: "110-120分", content: "1.中考难题专题讲解<br>2.课外文言文扩充 <br>3.现代文题型预测 <br>4.作文押题 <br>5.考前经验传授"
            },

        ],
        math: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.初中阶段数学知识全面梳理<br>2.中考数学考点基础习题答疑"
            },
            {
                subject: "images/system/LV2.png",
                grade: "60-72分", content: "1.中考数学典型例题讲解<br>2.函数、几何疑难点攻破延伸 <br>3.中考考点知识细节温故 <br>4.各章节知识点串联"
            },
            {
                subject: "images/system/LV3.png", grade: "72-90分", content: "1.专题全面检测<br>2.疑难专题狂补 <br>3.各类型题解题策略总结 <br>4.逆向思维题训练"
            },
            {
                subject: "images/system/LV4.png", grade: "90-110分", content: "1.代数、函数、几何难点突破<br>2.各类型题目解题技巧补充 <br>3.历年易错易混题专项讲解 <br>4.中考数学十大解题方法盘点 <br>5.冲刺阶段规划指点"
            },
            {
                subject: "images/system/LV5.png", grade: "110-120分", content: "1.中考新题小题难题集中轰炸<br>2.历年中考模拟题、真题压轴题讲解 <br> 3.中考考前经验传授全面解决知识、技能、心态，决胜中考"
            },
        ],
        English: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.考纲词汇精讲<br>2.难点语法精讲 <br> 3.基础专项练习"
            },
            {
                subject: "images/system/LV2.png", grade: "60-72分", content: "1.难点词组强化提高<br>2.情景对话分类精讲 <br> 3.易错难题解答类比"
            },
            {
                subject: "images/system/LV3.png", grade: "72-90分", content: "1.重点难点突破<br>2.专项查漏补缺 <br> 3.写作句型强化 <br>4.听力技巧强化"
            },
            {
                subject: "images/system/LV4.png", grade: "90-110分", content: "1.完型技巧快速突破<br>2.阅读技巧快速提升 <br>3.写作技巧满分训练 <br>4.冲刺阶段规划梳理"
            },
            {
                subject: "images/system/LV5.png", grade: "110-120分", content: "1.中考难点解析&突破<br>2.真题易错 & 易混专题 <br>3.考前经验传授知识，技巧，心态，决胜中考 <br>4.考前 压题 & 预测"
            },

        ],
        Physics: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.知识全面梳理<br>2.考点基础答疑"
            },
            {
                subject: "images/system/LV2.png", grade: "60-70分", content: "1.中考例题解剖<br>2.声、光、力、电难点突破 <br>3.物理实验专题强练"
            },
            {
                subject: "images/system/LV3.png", grade: "70-80分", content: "1.专题全面检测<br>2.疑难专题狂补 <br>3.解题策略刷新"
            },
            {
                subject: "images/system/LV4.png", grade: "80-90分", content: "1.解题技巧补充<br>2.易错易混题攻破 <br>3.中考专题冲刺"
            },
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.中考压轴轰炸<br>2.考前经验传授 <br>3.决胜中考攻略"
            },

        ],
        Chemistry: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.基础知识全面梳理<br>2.中考化学考点基础练"
            },
            {
                subject: "images/system/LV2.png", grade: "60-70分", content: "1.各考点典型例题讲解<br>2.常见物质的性质及相互转化关系的梳理 <br>3.实验基本操作及实验注意事项的突破"
            },
            {
                subject: "images/system/LV3.png", grade: "70-80分", content: "1.专题全面检测<br>2.物质的检验、鉴别与分离提纯专项提升 <br>3.实验、图像、计算答题策略总结 <br>4.答题技巧与限时训练"
            },
            {
                subject: "images/system/LV4.png", grade: "80-90分", content: "1.实验探究、物质推断等难点突破<br>2.各种类型题目解题技巧 <br>3.历年真题、易错、易混专项讲解 <br>4.冲刺阶段规划指点"
            },
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.中考化学新题难题集中轰炸<br>2.压轴题的强化训练 <br>3.中考考前心态调整技巧 <br>4.基础知识与易错题的回顾"
            },

        ]
    }
    ,
    senior_o_t: {
        Chinese: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.夯实课内基础知识<br>2.文言文考法梳理 <br>3.古诗词常识巩固 <br>4.记叙文阅读剖析 <br>5.审清题意写作不跑题"
            },
            {
                subject: "images/system/LV2.png", grade: "60-90分", content: "1.合理规划知识体系<br>2.妙识文言实词、虚词 <br>3.古诗词阅读整体规划 <br>4.散文阅读剖析 <br>5.写作素材收集串联"
            },
            {
                subject: "images/system/LV3.png", grade: "90-110分", content: "1.专题预习领先一步<br>2.文言语法点拨 <br>3.古诗词鉴赏策略总结 <br> 4.小说主旨阅读 <br> 5.作文结构创新技法"
            },
            {
                subject: "images/system/LV4.png", grade: "110-130分", content: "1.各类题型技巧公式<br>2.文言阅读高效提升 <br> 3.古诗词真题分类精讲 <br> 4.社科文高效突破 <br> 5.写作思维拓展训练"
            },
            {
                subject: "images/system/LV5.png", grade: "130-150分", content: "1.语言运用历年真题选讲<br>2.三遍阅读法攻克文言 <br> 3.考点重点拔高 <br> 4.现代文题干阅读高分法 <br> 5.写作高分模板点金"
            },

        ],
        math: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.基本初等函数、三角函数、数列、立体几何、解析几何等基本概念的巩固<br>2.对应知识点基础专题答疑"
            },
            {
                subject: "images/system/LV2.png", grade: "60-90分", content: "1.高一、高二各年级对应基础例题讲解<br>2.各类习题答疑提升"
            },
            {
                // subject: "images/system/LV3.png", grade: "90-110分", content: "1.函数、数列、概率、解几、立几五大专题查漏补缺。<br>2.典型考点训练 <br>3.解题策略提点"
                subject: "images/system/LV3.png", grade: "90-110分", content: "1.高一、高二各年级对应基础例题讲解<br>2.各类习题答疑提升"
            },
            {
                subject: "images/system/LV4.png", grade: "110-130分", content: "1.不等式、平面几何、参数方程等选学考点提前预习<br>2.期末考点轰炸训练 <br> 3.单元易错集中讲解"
            },
            {
                subject: "images/system/LV5.png", grade: "130-150分", content: "1.选填小题轰炸<br>2.历年难题选讲 <br> 3.典型压轴题讲解"
            },

        ],
        English: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.基础词汇短语强化巩固<br>2.基础语法知识讲练结合 <br> 3.基础词汇语法专项练习"
            },
            {
                subject: "images/system/LV2.png", grade: "60-90分", content: "1.从句非谓语快速提高<br>2.选择语法等专项训练 <br> 3.语篇理解强化 & 提高"
            },
            {
                subject: "images/system/LV3.png", grade: "90-110分", content: "1.重难点词组强化巩固<br>2.完型阅读等专项练习 <br> 3.写作题型归纳和技巧"
            },
            {
                subject: "images/system/LV4.png", grade: "110-130分", content: "1.完型阅读等技巧讲解归纳<br>2.写作范文模板解析 & 拓展 <br> 3.历年中考真题选讲 & 详解"
            },
            {
                subject: "images/system/LV5.png", grade: "130-150分", content: "1.难点语法解析&突破<br>2.考点难题解析 & 突破 <br> 3.学习阶段规划 & 指导"
            },

        ],
        Physics: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.课本知识梳理<br>2.基础题型讲解"
            },
            {
                subject: "images/system/LV2.png", grade: "60-70分", content: "1.受力分析全解读<br>2.电场物理量串联 <br> 3.动能定理巩固"
            },
            {
                subject: "images/system/LV3.png", grade: "70-80分", content: "1.解题速度提升<br>2.力学图像题专项 <br> 3.能量守恒观建立"
            },
            {
                subject: "images/system/LV4.png", grade: "80-90分", content: "1.力学四大模型精讲<br>2.电磁难题突破 <br> 3.失误点深度剖析"
            },
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.知识漏洞补缺<br>2.易错题总结 <br> 3.自招题型选讲"
            },

        ],
        Chemistry: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.化学方程式书写<br>2.基础知识梳理 <br> 3.基础习题答疑"
            },
            {
                subject: "images/system/LV2.png",
                grade: "60-70分",
                content: "1.无机、有机、实验等基础巩固提升<br>2.常考典型例题归类及解析方法 <br> 3.培养化学学习兴趣及学习技巧"
            },
            {
                subject: "images/system/LV3.png",
                grade: "70-80分",
                content: "1.基础知识查漏补缺<br>2.化工原理与实验等重难点专项突破 <br> 3.常考雷区与陷阱归纳 <br> 4.计算技巧训练"
            },
            {
                subject: "images/system/LV4.png",
                grade: "80-90分",
                content: "1.重难点强化训练<br>2.高考真题选讲 <br> 3.单元易错题讲解 <br> 4.化学思维拓展与知识网络构建"
            },
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.高考压轴题讲解<br>2.易错题讲解 <br> 3.竞赛拓展"
            },

        ],
        biont: [
            {
                subject: "images/system/LV1.png",
                grade: "0-60分",
                content: "1.细胞的分子与组成基础知识讲解<br>2.纯合子杂合子等概念的理解 <br>3.基础习题训练"
            },
            {
                subject: "images/system/LV2.png",
                grade: "60-70分",
                content: "1.光合，呼吸等重点知识的讲解<br>2.基础例题的掌握 <br> 3.加深对基础知识点的理解"
            },
            {
                subject: "images/system/LV3.png", grade: "70-80分", content: "1.典型例题讲解<br>2.熟悉知识点的常见考查方式 <br> 3.把握主干知识、明晰基本知识点"
            },
            {
                subject: "images/system/LV4.png", grade: "80-90分", content: "1.把分散的知识点联系起来，构建知识网络<br>2.单元易错题讲解 <br> 3.重点难点考试题型的训练"
            }
            ,
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.小题轰炸<br>2.建立知识模块之间的联系 <br> 3.期中期末易错题训练 <br> 4.高考理综题选讲"
            },

        ]
    }
    ,
    senior_th: {
        Chinese: [
            {
                subject: "images/system/LV1.png",
                grade: "0-60分",
                content: "1.学习方法设计<br>2.基础知识专项训练 <br> 3.阅读题型回顾 <br> 4.实词虚词查漏补缺 <br> 5.快速构思，示范作文"
            },
            {
                subject: "images/system/LV2.png",
                grade: "60-90分",
                content: "1.把脉命题走向<br>2.语言运用技巧讲解 <br> 3.快速阅读三步法 <br> 4.文言语法、句式、翻译 <br> 5.理性立意，深度写作"
            },
            {
                subject: "images/system/LV3.png",
                grade: "90-110分",
                content: "1.应试技巧点拨<br>2.基础知识小题精练 <br> 3.文本阅读分类解析 <br> 4.文言阅读进阶训练 <br> 5.精炼语言，百变素材"
            },
            {
                subject: "images/system/LV4.png",
                grade: "110-130分",
                content: "1.冲刺阶段规划<br>2.基础知识综合运用 <br> 3.阅读失分题突破 <br> 4.文言真题详解 <br> 5.作文预测，洞悉命题"
            },
            {
                subject: "images/system/LV5.png",
                grade: "130-150分",
                content: "1.临考经验传授<br>2.基础知识满分法则 <br> 3.阅读真题狂练 <br> 4.状元文言阅读心得 <br> 5.满分作文， 点评"
            },

        ],
        math: [
            {
                subject: "images/system/LV1.png",
                grade: "0-60分",
                content: "1.高中阶段数学知识全面梳理<br>2.高中数学考点基础习题答疑"
            },
            {
                subject: "images/system/LV2.png",
                grade: "60-90分",
                content: "1.基础知识查漏补缺<br>2.前后知识串联复习提升 <br> 3.典型例题讲解 <br> 4.疑难点攻破延伸"
            },
            {
                subject: "images/system/LV3.png",
                grade: "90-110分",
                content: "1.函数、数列、概率、解几、立几五大专题全面检测<br>2.疑难专题狂补 <br> 3.解题策略总结 <br> 4.逆向思维训练"
            },
            {
                subject: "images/system/LV4.png",
                grade: "110-130分",
                content: "1.函数、数列、概率、解几、立几五大专题重点拔高<br>2.解题技巧补充 <br> 3.高考真题狂练 <br> 4.高考方法盘点"
            },
            {
                subject: "images/system/LV5.png",
                grade: "130-150分",
                content: "1.真题难题新题轰炸<br>2.函数、数列、概率、解几、立几五大专题压轴题突破 <br> 3.高考模卷考核 <br> 4.高分考生心经 <br> 5.考前经验传授"
            },
        ],
        English: [
            {
                subject: "images/system/LV1.png",
                grade: "0-60分", content: "1.考纲词汇精讲<br>2.难点语法精讲 <br> 3.基础专项练习"
            },
            {
                subject: "images/system/LV2.png",
                grade: "60-90分", content: "1.难点词组强化提高<br>2.情景对话分类精讲 <br> 3.易错难题解答类比"
            },
            {
                subject: "images/system/LV3.png",
                grade: "90-110分",
                content: "1.重点难点突破<br>2.专项查漏补缺 <br> 3.写作句型强化 <br> 4.听力技巧强化"
            },
            {
                subject: "images/system/LV4.png",
                grade: "110-130分",
                content: "1.完型技巧快速突破<br>2.阅读技巧快速提升 <br> 3.写作技巧满分训练 <br> 4.冲刺阶段规划梳理"
            },
            {
                subject: "images/system/LV5.png",
                grade: "130-150分",
                content: "1.高考难点解析&突破<br>2.真题易错 & 易混专题 <br>3.考前经验传授知识，技巧，心态，决胜高考"
            },

        ],
        Physics: [
            {
                subject: "images/system/LV1.png",
                grade: "0-60分",
                content: "1.受力分析体系建立<br>2.必考基础题细讲"
            },
            {
                subject: "images/system/LV2.png", grade: "60-70分", content: "1.整体法应用提升<br>2.静电场解题总结 <br>3.变压器原理透析"
            },
            {
                subject: "images/system/LV3.png", grade: "70-80分", content: "1.专题全面检测<br>2.薄弱点补遗 <br>3.提分策略传授"
            },
            {
                subject: "images/system/LV4.png", grade: "80-90分", content: "1.必考考点拔高<br>2.电学实验题狂补 <br> 3.高考考题预测"},
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.电磁应用延伸<br>2.高考压轴讲解 <br> 3.一题双解拓展 <br> 4.考前心理疏导"
            },
        ],
        Chemistry: [
            {
                subject: "images/system/LV1.png", grade: "0-60分", content: "1.化学方程式总结归纳<br>2.知识点习题式归纳 <br>3.高考基础题练习"
            },
            {
                subject: "images/system/LV2.png", grade: "60-70分", content: "1.高考高频考点讲解分析<br>2.高考经典例题剖析 <br>3.构建化学知识网络"
            },
            {
                subject: "images/system/LV3.png", grade: "70-80分", content: "1.知识点查漏补缺<br>2.化学与技术、原理、实验重难点突破 <br>3.实验方案的设计与评价策略 <br>4.各类型题答题技巧"
            },
            {
                subject: "images/system/LV4.png", grade: "80-90分", content: "1.化学计算<br>2.历年易错题分析归纳 <br>3.答题策略与限时训练 <br>4.高考压轴题分析与狂练"
            },
            {
                subject: "images/system/LV5.png", grade: "90-100分", content: "1.总结高考趋势，命题方向<br>2. 押题预测 <br>3.高分考生心经 <br>4.考前心理疏导"
            },

        ],
        biont: [
            {
                subject: "images/system/LV1.png",
                grade: "0-60分",
                content: "1.必修基础知识的巩固，捋清各知识点<br>2.遗传，光合等重点知识的掌握 <br>3.基础习题答疑"
            },
            {
                subject: "images/system/LV2.png",
                grade: "60-70分",
                content: "1.基础知识查缺补漏<br>2.典型例题的讲解 <br>3.弄清光合与呼吸等知识间的内在联系"
            },
            {
                subject: "images/system/LV3.png",
                grade: "70-80分",
                content: "1.容易出错的知识板块进行加强<br>2.重点难点知识查缺补漏 <br>3.孟德尔计算解题技巧掌握"
            },
            {
                subject: "images/system/LV4.png",
                grade: "80-90分",
                content: "1.基础知识的综合、应用<br>2.进一步理解和理顺实验原则和实验设计的方法 <br>3.图表题、曲线题等题型解题技巧补充"
            },
            {
                subject: "images/system/LV5.png",
                grade: "90-100分",
                content: "1.对整个知识体系有完整认识，提高运用能力<br>2.重视实验图表题分析能力和做题技巧 <br>3.高考压轴题讲解 <br> 4.大题书写规范、术语准确严谨。"
            },
        ]
    }
    ,
}

var spring1={
    Chinese: [
        {subject: "images/system/LV1.png", grade: "0-60分", content: "1.学习习惯养成<br> 2.字音字形巩固<br> 3.认识病句类型<br> 4.课内知识梳理<br> 5.能够连贯写事"},
        {
            subject: "images/system/LV2.png",
            grade: "60-70分",
            content: "1.学习兴趣培养<br> 2.多音字、易错字专题精炼<br> 3.辨析病句原因<br> 4.激发阅读兴趣<br> 5.写作语言准确完整"
        },
        {
            subject: "images/system/LV3.png",
            grade: "70-80分",
            content: "1.正确使用标点符号<br>2.成语、俗语、谚语等汇总<br> 3.修改病句技巧传授<br> 4.阅读题策略总结<br> 5.写作语言生动"
        },
        {
            subject: "images/system/LV4.png",
            grade: "80-90分",
            content: "1.专题预习领先一步<br>2.古诗词基础积累<br> 3.阅读易错题突破<br> 4.课外阅读拓展提升<br> 5.熟练写出常用文体"
        },
        {
            subject: "images/system/LV5.png",
            grade: "90-100分",
            content: "1.小升初复习规划<br>2.小升初考点、重难点梳理<br> 3.小升初基础知识满分技巧<br> 4.小升初阅读题型精练<br> 5.小升初写作技巧"
        },
    ],
}


$(function () {
    var grade = "primary",
        subject;
    $("#winterTab li.active a:first-child").css({backgroundColor:"#f40009",color:"#FFF"});
    $("#winterContent div.active li:first-child a").css({backgroundColor:"#f40009",color:"#FFF"});
    // $("table tbody tr").css("backgroundColor","red");
    $("#winterTab a").on("mouseover",function (e) {
        // $(this).click();
        // $("#winterContent li").eq("0")();
        $("#winterTab li a").css({backgroundColor:"",color:"#000"});
        $(this).css({backgroundColor:"#f40009",color:"#FFF"});
        grade = $(this).parent().data("grade");
        $(this).tab('show');
    })
    $("#winterContent li").mouseenter(function () {

        // $(this).click();
        if($(this).find("a").css("backgroundColor")=="rgb(248, 69, 35)"){
            return false
        }

        $("#winterContent li a").css({backgroundColor:"",color:"#000"});
        $(this).find("a").css({backgroundColor:"#f40009",color:"#FFF"});
        subject = $(this).data("subject");
        spring1.Chinese = spring[grade][subject];
        // console.log(winter1);
        $("#winterAll").html(template("winter", spring1));

        // $("#winterAll li").eq(0).find("p").addClass("one");
        // $("#winterAll li").eq(1).find("p").addClass("two");
        // $("#winterAll li").eq(2).find("p").addClass("three");
        // $("#winterAll li").eq(3).find("p").addClass("four");
        // $("#winterAll li").eq(4).find("p").addClass("five");
    })
    // console.log(winter1);
    // console.log(winter[grade][subject]);
    template.config("escape", false);
    $("#winterAll").html(template("winter", spring1));
})
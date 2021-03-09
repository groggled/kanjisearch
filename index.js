fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let kanjiOut = []
let kanjiTestFor = Array.from('勺銑脹錘匁塡剝頰叱填剥頬一右口雨円圓囗王玉音下火花艸貝学學子気氣气九乙こ休人金空穴月犬見五二校木左工三山四糸絲字耳七車手十出凵女小上森水正止生青靑夕石赤千川巛先儿早日草足村大男田竹中丨虫蟲町天土入年干白八百文本名目立力林六引弓羽雲園遠辵何科禾夏夊家宀歌欠画畫回会會曰海海絵繪外角楽樂活間門丸丶岩顔頁汽記言帰歸牛魚京亠強教攴近兄形彡計元原厂戸戶古午後彳語公広廣广交光考老行高黄黃合谷国國黒黑今才細作算市巾矢姉思心紙寺寸自時室社社示弱首秋週春書少場色食新斤親図圖数數西襾声聲星晴切刀雪船舟線前組走多太体體骨台臺至地池知茶昼晝長鳥朝直通弟店点點電冬冫当當東答頭同道読讀内南肉馬売賣買麦麥半番父風分聞米歩步母毋方北匕毎每妹万萬明鳴毛夜野里友又用曜来來理話悪惡安暗医醫酉委意育ぐ員院阜飲運泳駅驛央横橫屋尸温溫化荷界開階寒感漢漢館岸起期客究急級宮球去厶橋業曲局銀区區匸苦具君係軽輕血決研硏県縣庫湖向幸港号號虍根祭仕死歹使始指歯齒詩次事亅持式弋実實写寫者者主守取酒受州拾終習集隹住重宿所暑暑助昭消商章勝乗乘丿植申身神神真眞深進世整昔全相送想息速族他打対對待代第題炭短談着羊注柱丁帳調追定庭笛鉄鐵転轉都都邑度投豆島湯登癶等動ご童農辰波配倍箱畑発發反坂板皮悲美鼻筆氷表衣秒病疒品負部服福福物平返勉勉放味命面問役薬藥由油有遊予豫豕洋葉陽様樣落流旅両兩緑綠礼禮列練練路和皿愛案以位囲圍胃印卩英栄榮塩鹽鹵億加果貨課芽改械害街各覚覺完官管関關観觀願希季紀喜旗器器機議求泣救給挙擧漁共協鏡競極訓軍郡径徑型景芸藝缺缶結建廴健験驗固功好候航康告差菜最材昨札刷殺殺殳察参參産散残殘士氏史司試児兒治辞辭辛失借種周祝祝順初松笑唱焼燒象照賞臣信成戈省清静靜席積折節節説浅淺戦戰選然争爭爪倉巣巢束側続續卒孫帯帶隊達単單置网仲貯兆腸低底停的典伝傳徒努灯燈堂働特得毒熱念敗梅梅博飯飛費必票標不夫付府副粉兵別辺邊変變便包勹法望牧末満滿未脈民無約勇要養浴利陸良艮料斗量輪類類令冷例歴歷連労勞録錄圧壓移因永営營衛衞易益液演応應往桜櫻恩可仮假価價河過賀快解格確額刊幹慣眼基寄規技義逆久旧舊臼居許境均禁句群経經潔件券険險検檢限現減故個護効效厚耕耒鉱鑛構興講混査再冂災妻採際在財罪雑雜酸賛贊支志枝師資飼似識質舎舍舌謝授修述術準序招承証證条條状狀常情織職制性政勢精製税責績接設絶絕銭錢祖祖素総總造像増增則測属屬率玄損退貸態団團断斷築張提程適敵統銅導徳德独獨任燃能破犯判版片比肥非備俵評貧布婦富武復複仏佛編弁辨瓣辯瓜保墓報豊豐防貿暴務夢迷綿輸余餘預容略留領異遺域宇映延沿我灰拡擴革閣割株巻卷看簡危机揮貴疑疋吸供胸郷鄕勤勤筋系敬警劇激絹権權憲源厳嚴己呼誤后孝皇紅降鋼刻穀穀困砂座済濟裁策冊蚕蠶私姿視視詞誌磁射捨尺若樹収收宗就尢衆従從縦縱縮熟純処處署署諸諸除将將傷障城蒸針仁垂推盛聖誠宣専專泉洗染善奏窓創装裝層層操蔵藏臓臟存尊宅担擔探誕段暖値宙忠著著庁廳頂潮賃痛展討党黨糖届屆難難乳認納脳腦派拝拜背肺俳班晩晚否批秘祕腹奮並竝陛閉補暮宝寶訪亡忘棒枚幕密盟模訳譯郵優幼幺欲翌乱亂卵覧覽裏律臨朗朗論亜亞哀握扱依威為爲尉偉違維慰緯壱壹逸逸芋姻陰隠隱韻畝浦詠影鋭疫悦越謁謁閲炎宴援煙鉛縁緣汚押欧歐殴毆翁奥奧憶虞卸穏穩佳架華菓嫁暇禍禍寡箇蚊雅餓介戒怪悔悔皆塊壊壞懐懷劾慨慨該概槪核郭較隔獲嚇穫岳嶽掛括渇渴滑轄且刈甘汗肝冠冖陥陷乾勘患貫喚堪換敢棺款閑勧勸寛寬歓歡監緩憾還環艦鑑含企岐忌奇祈祈軌既既无飢鬼幾棋棄輝騎宜偽僞欺儀戯戲擬犠犧菊吉喫詰却脚虐及丘朽糾窮巨拒拠據虚虛距御凶叫狂享況峡峽狭狹恐恭脅響響驚仰暁曉凝菌琴緊謹謹吟駆驅愚偶遇屈掘繰勲勳薫薰刑茎莖契恵惠啓掲揭傾携継繼慶憩鶏鷄迎鯨撃擊傑肩倹儉兼剣劍軒圏圈堅献獻遣賢謙繭顕顯懸幻弦孤弧枯雇誇鼓顧互呉娯悟碁孔巧甲江坑抗攻更拘肯侯恒恆荒郊香貢控慌硬絞項綱酵稿衡購拷剛豪克酷獄込恨婚紺魂墾懇佐唆詐鎖砕碎宰栽彩斎齋齊債催歳載剤劑削索酢搾錯咲撮擦惨慘暫旨伺刺祉祉施脂紫嗣雌賜諮侍滋慈璽軸疾執湿濕漆芝赦斜煮煮邪釈釋釆爵寂朱狩殊珠趣寿壽需儒囚秀臭臭愁酬醜襲充柔渋澁銃獣獸叔淑粛肅聿俊瞬旬巡盾准殉循潤遵庶緒緖如叙敍徐升召匠匚床抄肖昇沼症祥祥称稱渉涉紹訟掌晶焦硝粧詔奨奬詳彰衝償礁鐘丈冗浄淨剰剩畳疊嬢孃錠譲讓醸釀殖飾触觸嘱囑辱伸侵津娠振浸紳診寝寢慎愼審震薪刃尽盡迅陣尋吹炊帥粋粹衰酔醉遂睡穂穗随隨髄髓枢樞崇瀬瀨是井姓征牲婿誓請斥析隻惜跡籍拙窃竊摂攝占卜扇旋践踐潜潛遷薦繊纖鮮禅禪漸繕阻租措粗疎訴塑礎双雙壮壯荘莊捜搜桑掃喪葬僧僧遭燥霜騒騷憎憎贈贈即卽促俗賊妥堕墮惰耐而怠胎泰袋逮替滞滯滝瀧択擇沢澤卓拓託諾濁但脱奪丹胆膽淡嘆嘆端鍛弾彈壇恥致遅遲痴癡稚畜逐蓄秩窒嫡沖抽衷鋳鑄駐弔彫超跳徴徵澄聴聽懲懲勅敕沈珍朕陳鎮鎭墜坪呈廷抵邸貞帝訂逓遞堤艇締摘滴迭哲徹撤添殿吐途渡塗奴怒到逃倒凍唐桃透悼盗盜陶塔痘筒稲稻踏謄闘鬭鬥騰胴峠匿督篤突突豚鈍曇軟尼弐貳尿妊忍寧粘悩惱濃婆杯排廃廢輩培陪媒賠伯拍泊迫舶薄縛爆髪髮髟伐抜拔罰閥帆伴畔般販搬煩頒範繁繁藩蛮蠻盤妃彼卑卑疲被碑碑罷避尾微匹泌姫漂苗描浜濱賓賓敏敏扶怖附赴浮符普腐敷膚賦譜侮侮舞舛封伏幅覆払拂沸紛噴墳憤丙併倂柄幣弊廾壁癖偏遍捕舗募慕簿芳邦奉抱胞倣峰砲崩飽縫乏忙坊妨房肪某冒剖紡傍帽膨謀墨墨撲没沒奔翻飜凡几盆麻摩魔埋膜慢漫魅妙眠矛霧娘銘滅免免茂盲耗猛網黙默紋躍愉諭唯幽猶裕雄誘憂融与與誉譽庸揚揺搖溶腰踊窯擁謡謠抑翼裸雷頼賴絡酪濫欄欄吏痢履離柳粒隆隆硫虜虜慮了涼猟獵陵僚寮療糧厘倫隣涙淚累塁壘励勵鈴零霊靈隷隶齢齡麗鹿暦曆劣烈裂恋戀廉錬鍊炉爐露郎郞浪廊廊楼樓漏賄惑湾灣腕猿凹渦靴稼拐涯垣殻殼潟喝喝褐褐罐頑挟挾矯襟隅渓溪蛍螢嫌洪溝昆崎桟棧傘肢遮蛇酌汁塾尚宵縄繩壌壤唇甚据杉斉逝仙栓挿插曹槽藻駄濯棚挑眺釣塚塚漬亭偵泥搭棟洞凸屯屮把覇霸漠肌鉢披扉猫頻頻瓶甁瓦雰塀塀泡俸褒襃朴僕堀磨抹岬妄厄癒悠羅竜龍戻戾枠挨曖宛嵐畏萎椅彙彐茨咽淫唄鬱鬯怨媛艶艷旺岡臆俺苛牙楷潰諧崖蓋骸柿顎葛釜鎌韓韋玩伎亀龜毀畿嗅僅錦惧串窟熊詣憬稽隙桁拳鍵舷股虎錮勾梗喉乞傲駒頃痕沙挫采塞埼柵刹拶斬恣摯餌嫉腫呪袖羞蹴憧拭尻芯腎須裾凄醒脊戚煎羨腺詮箋膳狙遡曽曾爽爻痩瘦踪捉遜汰唾堆戴誰旦綻緻酎貼嘲捗椎鶴諦溺妬賭藤瞳栃頓貪丼那奈梨謎鍋匂虹捻罵箸氾汎阪斑眉膝肘訃蔽餅餠璧蔑哺蜂貌豸睦勃昧枕蜜冥麺麵冶弥彌闇喩湧妖瘍沃拉辣藍璃慄侶瞭瑠呂賂弄籠麓脇辶辶飠')
//I hope that are all the Kanji there are


readline.question('Type file name to import \n', name => {
    if (!(name.slice(name.length - 4, name.length) === '.txt')) {
        name += '.txt'
    }
    fs.readFile(name, (e, data) => {
        if(e) {
            console.log(e)
        } else if (data === undefined||data === null){
            console.log("No data received")
        } else {
            findKanjis(data)
            let output = kanjiOut.join(" ")
            fs.writeFileSync("kanjis.txt", output)
            console.log("Done")
        }
    } )
    readline.close()
});


function findKanjis(data) {
    let characters = data.toString().split('')
    characters.forEach(character => {
        if(kanjiTestFor.indexOf(character) !== -1 && kanjiOut.indexOf(character) === -1) {
            kanjiOut.push(character)
        }
    })
}
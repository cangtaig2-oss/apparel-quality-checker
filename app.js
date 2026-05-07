const materialMaster = {
  cotton: {
    names: ["綿", "コットン", "cotton"],
    label: "綿",
    good: "肌触りと吸湿性があり、日常使いしやすい素材です。",
    risks: ["縮み", "シワ", "乾きにくさ"],
    pilling: 1,
    shrink: 3,
    wrinkle: 3,
    static: 0,
    care: 2,
    luxury: 2,
  },
  linen: {
    names: ["麻", "リネン", "linen"],
    label: "麻",
    good: "通気性がよく、夏物では涼しさと風合いが出ます。",
    risks: ["シワ", "縮み", "色落ち"],
    pilling: 0,
    shrink: 3,
    wrinkle: 4,
    static: 0,
    care: 3,
    luxury: 3,
  },
  wool: {
    names: ["毛", "ウール", "wool"],
    label: "ウール",
    good: "保温性と高級感があり、コートやニットでは強みになります。",
    risks: ["縮み", "虫食い", "毛玉", "チクチク"],
    pilling: 3,
    shrink: 4,
    wrinkle: 1,
    static: 1,
    care: 4,
    luxury: 4,
  },
  cashmere: {
    names: ["カシミヤ", "カシミア", "cashmere"],
    label: "カシミヤ",
    good: "軽く柔らかく、暖かさと高級感があります。",
    risks: ["摩擦毛玉", "ケア負担", "虫食い"],
    pilling: 4,
    shrink: 4,
    wrinkle: 1,
    static: 1,
    care: 5,
    luxury: 5,
  },
  silk: {
    names: ["絹", "シルク", "silk"],
    label: "シルク",
    good: "光沢と肌触りがよく、きれいめ用途で映える素材です。",
    risks: ["水ジミ", "汗", "摩擦", "紫外線"],
    pilling: 1,
    shrink: 3,
    wrinkle: 2,
    static: 1,
    care: 5,
    luxury: 5,
  },
  polyester: {
    names: ["ポリエステル", "polyester"],
    label: "ポリエステル",
    good: "シワになりにくく乾きやすいため、扱いやすい素材です。",
    risks: ["蒸れ", "静電気", "毛玉", "質感差"],
    pilling: 3,
    shrink: 0,
    wrinkle: 0,
    static: 3,
    care: 1,
    luxury: 1,
  },
  nylon: {
    names: ["ナイロン", "nylon"],
    label: "ナイロン",
    good: "軽く丈夫で、補強やスポーツ用途ではプラスになります。",
    risks: ["熱弱さ", "静電気", "蒸れ"],
    pilling: 1,
    shrink: 0,
    wrinkle: 0,
    static: 3,
    care: 1,
    luxury: 1,
  },
  acrylic: {
    names: ["アクリル", "acrylic"],
    label: "アクリル",
    good: "軽く安価で、トレンドニットでは取り入れやすい素材です。",
    risks: ["毛玉", "静電気", "伸び", "安っぽさ"],
    pilling: 5,
    shrink: 0,
    wrinkle: 0,
    static: 4,
    care: 2,
    luxury: 0,
  },
  rayon: {
    names: ["レーヨン", "ビスコース", "viscose", "rayon"],
    label: "レーヨン",
    good: "落ち感と柔らかさがあり、きれいめに見えやすい素材です。",
    risks: ["水縮み", "シワ", "ヨレ", "乾きにくさ"],
    pilling: 1,
    shrink: 5,
    wrinkle: 4,
    static: 0,
    care: 5,
    luxury: 3,
  },
  cupro: {
    names: ["キュプラ", "ベンベルグ", "cupro"],
    label: "キュプラ",
    good: "裏地として滑りがよく、上質感につながります。",
    risks: ["水縮み", "シワ", "裏地つれ"],
    pilling: 0,
    shrink: 4,
    wrinkle: 3,
    static: 0,
    care: 5,
    luxury: 4,
  },
  polyurethane: {
    names: ["ポリウレタン", "pu", "エラスタン", "スパンデックス"],
    label: "ポリウレタン",
    good: "伸縮性があり、着心地や動きやすさを補います。",
    risks: ["経年劣化", "伸び", "戻りにくさ", "加水分解"],
    pilling: 1,
    shrink: 0,
    wrinkle: 0,
    static: 1,
    care: 3,
    luxury: 1,
  },
  fakeLeather: {
    names: ["合成皮革", "合皮", "フェイクレザー", "人工皮革", "puレザー", "pvc"],
    label: "合皮",
    good: "短期使用やデザイン重視なら取り入れやすい素材です。",
    risks: ["加水分解", "表面剥がれ", "蒸れ", "長期使用不向き"],
    pilling: 0,
    shrink: 0,
    wrinkle: 1,
    static: 1,
    care: 5,
    luxury: 1,
  },
};

const categoryChecks = {
  "Tシャツ": ["首リブの戻り", "透け感", "プリントや刺繍の重さ", "洗濯後の斜行"],
  "ニット": ["編み密度", "毛羽立ち", "袖口と裾リブの戻り", "重さ"],
  "パーカー・スウェット": ["リブの戻り", "フードの重さ", "裏毛・裏起毛の毛玉", "ファスナーがYKKか"],
  "パンツ": ["膝抜け", "股部分の摩耗", "透け感", "ウエストゴムの戻り"],
  "スカート": ["裏地のつれ", "裾始末", "透け感", "座りジワ"],
  "ワンピース": ["裏地と表地の縮率差", "透け感", "汗ジミ", "縫い目の歪み"],
  "ブラウス": ["汗ジミ", "透け感", "ボタンホール", "シワの出方"],
  "ジャケット": ["肩線", "芯地", "襟の形", "裏地の余裕"],
  "コート": ["重さ", "芯地", "ボタンの力布", "襟と肩の作り"],
  "合皮アイテム": ["折れ曲がる部分", "表面のベタつき", "保管跡", "ファスナーや金具"],
};

const $ = (id) => document.getElementById(id);
const shareText = "服の素材タグから、買っていいか・家で洗えるかを診断できるアプリです。";
let selectedTagFile = null;

function normalizeText(text) {
  return normalizeOcrDigits(text)
    .toLowerCase()
    .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/％/g, "%")
    .replace(/　/g, " ");
}

function findMaterial(rawName) {
  const normalized = normalizeText(rawName).replace(/\s/g, "");
  return Object.entries(materialMaster).find(([, material]) =>
    material.names.some((name) => normalized.includes(normalizeText(name).replace(/\s/g, "")))
  );
}

function parseMaterials(text) {
  const normalized = normalizeText(text);
  const matches = [];
  const pattern = /([ぁ-んァ-ン一-龥a-zA-Zー・]+)\s*([0-9]{1,3})\s*%/g;
  let match;

  while ((match = pattern.exec(normalized))) {
    const found = findMaterial(match[1]);
    if (found) {
      matches.push({
        id: found[0],
        label: found[1].label,
        percentage: Number(match[2]),
        raw: match[0],
      });
    }
  }

  const compact = normalized.replace(/\s+/g, "");
  Object.entries(materialMaster).forEach(([id, material]) => {
    material.names.forEach((name) => {
      const normalizedName = normalizeText(name).replace(/\s+/g, "");
      const escapedName = escapeRegExp(normalizedName);
      const compactPattern = new RegExp(`${escapedName}[^0-9%]{0,16}([0-9]{1,3})%`, "g");
      let compactMatch;
      while ((compactMatch = compactPattern.exec(compact))) {
        matches.push({
          id,
          label: material.label,
          percentage: Number(compactMatch[1]),
          raw: compactMatch[0],
        });
      }
    });
  });

  return mergeMaterials(matches);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function mergeMaterials(materials) {
  const merged = new Map();
  materials.forEach((material) => {
    const current = merged.get(material.id);
    if (!current || material.percentage > current.percentage) {
      merged.set(material.id, material);
    }
  });
  return [...merged.values()].sort((a, b) => b.percentage - a.percentage);
}

function parseCareLabel(text) {
  const normalized = normalizeText(text);
  return {
    homeWash: /(家庭洗濯可|洗濯機可|手洗い可|手洗い)/.test(normalized) && !/(家庭洗濯不可|水洗い不可|洗濯不可)/.test(normalized),
    homeWashForbidden: /(家庭洗濯不可|水洗い不可|洗濯不可)/.test(normalized),
    handWash: /手洗い/.test(normalized),
    tumbleDryForbidden: /(タンブル乾燥不可|乾燥機不可)/.test(normalized),
    dryOnly: /(ドライ|クリーニング)/.test(normalized) && /(家庭洗濯不可|水洗い不可|洗濯不可)/.test(normalized),
    ironForbidden: /アイロン不可/.test(normalized),
  };
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function includesMaterial(materials, id, min = 1) {
  return materials.find((material) => material.id === id && material.percentage >= min);
}

function getFormData() {
  const sensitivities = [...document.querySelectorAll("input[name='sensitivity']:checked")].map((input) => input.value);
  return {
    tagText: $("tagText").value,
    category: $("category").value,
    price: Number($("price").value || 0),
    useCase: $("useCase").value,
    frequency: $("frequency").value,
    lifespan: $("lifespan").value,
    homeWashNeed: $("homeWashNeed").value,
    dryerUse: $("dryerUse").value,
    sensitivities,
    hasLining: $("hasLining").checked,
    hasInterlining: $("hasInterlining").checked,
    hasDecoration: $("hasDecoration").checked,
    zipperConcern: $("zipperConcern").checked,
    sewingConcern: $("sewingConcern").checked,
  };
}

function diagnose(data) {
  const materials = parseMaterials(data.tagText);
  const careLabel = parseCareLabel(data.tagText);
  const good = [];
  const warnings = [];
  const goodFor = [];
  const avoidFor = [];
  const checklist = new Set(categoryChecks[data.category] || []);
  const riskTags = new Set();

  let materialScore = 68;
  let durabilityScore = 72;
  let careScore = careLabel.homeWash ? 78 : careLabel.handWash ? 68 : 58;
  let priceScore = 68;
  let useScore = 70;
  let riskPenalty = 0;

  if (!materials.length) {
    warnings.push("素材と混率が読み取れていません。タグの素材名と％を確認してください。");
    materialScore -= 20;
    useScore -= 10;
  }

  materials.forEach((item) => {
    const master = materialMaster[item.id];
    if (item.percentage >= 20) good.push(`${master.label}${item.percentage}%: ${master.good}`);
    if (master.pilling >= 3 && item.percentage >= 30) riskTags.add("毛玉");
    if (master.shrink >= 3 && item.percentage >= 30) riskTags.add("縮み");
    if (master.wrinkle >= 3 && item.percentage >= 30) riskTags.add("シワ");
    if (master.static >= 3 && item.percentage >= 30) riskTags.add("静電気");
    careScore -= master.care * (item.percentage / 100) * 7;
    materialScore += (master.luxury - 2) * (item.percentage / 100) * 8;
  });

  const polyurethane = includesMaterial(materials, "polyurethane");
  if (polyurethane) {
    if (data.category === "パンツ" && polyurethane.percentage >= 1 && polyurethane.percentage <= 3) {
      good.push("パンツとしては適度なストレッチ性があり、動きやすさが期待できます。");
      useScore += 8;
    }
    if (polyurethane.percentage >= 5) {
      warnings.push(`ポリウレタン${polyurethane.percentage}%は伸縮性が高い一方、長期使用では伸び・型崩れ・経年劣化に注意です。`);
      durabilityScore -= 14;
      riskPenalty += data.lifespan.includes("5") || data.lifespan.includes("2〜3") ? 10 : 3;
      riskTags.add("ポリウレタン劣化");
    }
  }

  const acrylic = includesMaterial(materials, "acrylic");
  if (acrylic) {
    if (acrylic.percentage >= 70) {
      warnings.push(`アクリル${acrylic.percentage}%は毛玉・静電気・伸びのリスクが高めです。`);
      durabilityScore -= 16;
      materialScore -= 8;
    }
    if (acrylic.percentage >= 50 && data.price >= 10000) {
      warnings.push("高価格帯でアクリル高混率のため、価格に対する素材満足度は慎重に見たい商品です。");
      priceScore -= data.price >= 15000 ? 24 : 16;
    }
  }

  const rayon = includesMaterial(materials, "rayon");
  if (rayon) {
    if (rayon.percentage >= 50) {
      warnings.push(`レーヨン${rayon.percentage}%は落ち感が魅力ですが、水洗いで縮み・ヨレ・シワが出やすい素材です。`);
      careScore -= 18;
      durabilityScore -= 9;
    }
    if ((data.useCase === "旅行" || data.useCase === "仕事") && data.frequency !== "年数回") {
      warnings.push("シワが出やすいため、旅行や高頻度の仕事着ではケア負担が出やすいです。");
      useScore -= 12;
    }
  }

  const wool = includesMaterial(materials, "wool");
  if (wool) {
    if (data.category === "コート" && wool.percentage >= 50) {
      good.push("コートとしてはウール感があり、保温性と見た目の上質感が期待できます。");
      materialScore += 12;
      priceScore += data.price >= 10000 ? 6 : 0;
    }
    if (data.homeWashNeed === "必須") {
      warnings.push("ウール混で家洗い必須の場合、縮みや風合い変化のリスクがあります。");
      careScore -= 16;
    }
  }

  const cashmere = includesMaterial(materials, "cashmere");
  if (cashmere) {
    if (cashmere.percentage <= 5) warnings.push("カシミヤ少量混は肌触り訴求程度です。混率だけでなく厚みと毛羽立ちも見てください。");
    careScore -= 12;
  }

  const fakeLeather = includesMaterial(materials, "fakeLeather") || data.category === "合皮アイテム";
  if (fakeLeather) {
    warnings.push("合皮は基本的に長期使用品ではなく、数年で表面剥がれや加水分解が起きる前提で判断してください。");
    durabilityScore -= 18;
    careScore -= 10;
    if (data.price >= 30000 || data.lifespan.includes("5")) {
      priceScore -= 22;
      riskPenalty += 12;
    }
  }

  const cotton = includesMaterial(materials, "cotton", 70);
  if (cotton) {
    if (data.category === "Tシャツ") {
      good.push("Tシャツとして綿高混率は肌触りと日常使いの面でプラスです。");
      useScore += 8;
    }
    if (data.dryerUse !== "使わない") {
      warnings.push("綿高混率で乾燥機を使う場合、縮みや斜行に注意してください。");
      careScore -= 10;
      riskTags.add("乾燥機縮み");
    }
  }

  if (careLabel.homeWashForbidden) {
    warnings.push("洗濯表示では家庭洗濯不可です。表示通りならクリーニング前提の商品です。");
    careScore -= data.homeWashNeed === "必須" ? 28 : data.homeWashNeed === "できれば" ? 18 : 8;
    if (["普段着", "仕事", "育児", "部屋着"].includes(data.useCase)) {
      warnings.push("普段使い・高頻度用途で家庭洗濯不可だと、維持費と手間が増えます。");
      useScore -= 12;
    }
  } else if (careLabel.homeWash || careLabel.handWash) {
    good.push(careLabel.handWash ? "手洗い表示があり、慎重なケアなら家庭管理しやすい商品です。" : "家庭洗濯できる表示のため、日常使いしやすい商品です。");
    careScore += careLabel.homeWash ? 12 : 6;
  }

  if (careLabel.tumbleDryForbidden && data.dryerUse !== "使わない") {
    warnings.push("タンブル乾燥不可のため、乾燥機を使う生活とは相性がよくありません。");
    careScore -= 12;
  }

  if (data.hasLining) {
    checklist.add("裏地がつれていないか");
    careScore -= 4;
  }
  if (data.hasInterlining) {
    warnings.push("芯地ありの場合、水洗いで剥がれや型崩れが起きることがあります。");
    checklist.add("襟・前立て・肩の芯地");
    careScore -= 12;
  }
  if (data.hasDecoration) {
    warnings.push("刺繍・ビーズ・重いプリントは穴あきや洗濯ダメージの原因になります。");
    checklist.add("刺繍裏やプリント周辺の生地負担");
    durabilityScore -= 9;
  }
  if (data.zipperConcern) {
    warnings.push("ファスナーの滑りが悪い場合、購入後のストレスや破損リスクがあります。");
    checklist.add("ファスナーのメーカーと滑り");
    durabilityScore -= 8;
  }
  if (data.sewingConcern) {
    warnings.push("縫い目や糸始末に不安がある場合、価格が高いほど慎重に見た方がよいです。");
    checklist.add("脇線・裾・ボタンホールの糸始末");
    durabilityScore -= 8;
    priceScore -= data.price >= 10000 ? 8 : 3;
  }

  data.sensitivities.forEach((sensitivity) => {
    if (riskTags.has(sensitivity)) {
      warnings.push(`${sensitivity}が苦手な人には、素材構成上ストレスになる可能性があります。`);
      useScore -= 6;
      riskPenalty += 3;
    }
  });

  if (data.price <= 3000 && warnings.length) {
    priceScore += 8;
    good.push("低価格帯なので、短期使用やトレンド服としてなら許容しやすいです。");
  }
  if (data.price >= 30000 && warnings.length >= 3) {
    warnings.push("高価格帯としてはリスク要素が多めです。素材・縫製・副資材を店頭で追加確認してください。");
    priceScore -= 12;
  }

  if (data.lifespan.includes("5") && (warnings.length >= 2 || fakeLeather)) {
    avoidFor.push("5年以上、長くきれいに着たい人");
    useScore -= 10;
  }
  if (["毎日", "週2〜3回"].includes(data.frequency) && careLabel.homeWashForbidden) {
    avoidFor.push("高頻度で着て、洗濯機で気軽に洗いたい人");
  }

  goodFor.push(...buildGoodFor(data, careLabel, warnings));
  avoidFor.push(...buildAvoidFor(data, riskTags, careLabel));
  addDefaultChecklist(checklist, data);

  materialScore = clamp(materialScore);
  durabilityScore = clamp(durabilityScore);
  careScore = clamp(careScore);
  priceScore = clamp(priceScore);
  useScore = clamp(useScore);

  const total = clamp(
    materialScore * 0.2 +
      durabilityScore * 0.15 +
      careScore * 0.15 +
      priceScore * 0.15 +
      useScore * 0.15 +
      10 +
      (data.zipperConcern || data.sewingConcern ? 2 : 9) -
      riskPenalty
  );

  const judgment = getJudgment(total, data, warnings, priceScore, careScore);
  const homeWash = diagnoseHomeWash(data, materials, careLabel);

  return {
    materials,
    scores: { total, materialScore, durabilityScore, careScore, priceScore, useScore },
    judgment,
    oneLine: buildOneLine(judgment, data, careScore, durabilityScore, priceScore),
    homeWash,
    good: unique(good).slice(0, 6),
    warnings: unique(warnings).slice(0, 8),
    goodFor: unique(goodFor).slice(0, 5),
    avoidFor: unique(avoidFor).slice(0, 5),
    checklist: [...checklist].slice(0, 8),
  };
}

function buildGoodFor(data, careLabel, warnings) {
  const items = [];
  if (data.lifespan === "1シーズン" || data.price <= 5000) items.push("今季のトレンド服として楽しみたい人");
  if (!careLabel.homeWashForbidden) items.push("家でケアしながら日常的に使いたい人");
  if (careLabel.homeWashForbidden) items.push("手洗いやクリーニングに抵抗がない人");
  if (warnings.length <= 2) items.push("素材と価格のバランスを重視する人");
  if (data.frequency === "月数回" || data.frequency === "年数回") items.push("毎日ではなく、おしゃれ着として使いたい人");
  return items;
}

function buildAvoidFor(data, riskTags, careLabel) {
  const items = [];
  if (careLabel.homeWashForbidden || data.homeWashNeed === "必須") items.push("洗濯機で気軽に洗いたい人");
  if (riskTags.has("毛玉")) items.push("毛玉がとても苦手な人");
  if (riskTags.has("シワ")) items.push("ノーアイロンで着たい人");
  if (riskTags.has("縮み")) items.push("少しの縮みやヨレも避けたい人");
  if (data.dryerUse !== "使わない") items.push("乾燥機をよく使う人");
  return items;
}

function addDefaultChecklist(checklist, data) {
  checklist.add("洗濯表示タグの家庭洗濯可否");
  checklist.add("縫い目の歪みと糸始末");
  if (["ワンピース", "ブラウス", "Tシャツ", "パンツ"].includes(data.category)) checklist.add("自然光での透け感");
  if (["コート", "ジャケット"].includes(data.category)) checklist.add("肩線・襟・前立ての型崩れ");
  if (data.price >= 10000) checklist.add("価格に見合う裏地・ボタン・ファスナーか");
}

function getJudgment(total, data, warnings, priceScore, careScore) {
  if (total >= 85) return { label: "買い", className: "buy" };
  if (total >= 70) return { label: "条件付きで買い", className: "conditional" };
  if (total >= 55) {
    if (data.price <= 5000 || priceScore >= 70) return { label: "用途次第・セールならあり", className: "caution" };
    return { label: "慎重に検討", className: "caution" };
  }
  if (careScore < 35 && data.homeWashNeed === "必須") return { label: "ケアできる人向け", className: "skip" };
  return { label: "見送り推奨", className: "skip" };
}

function diagnoseHomeWash(data, materials, careLabel) {
  let score = 50;
  const reasons = [];

  if (careLabel.homeWash) {
    score += 25;
    reasons.push("家庭洗濯可の表示があります。");
  }
  if (careLabel.handWash) {
    score += 18;
    reasons.push("手洗い表示があるため、洗濯機よりも短時間の押し洗いが向きます。");
  }
  if (careLabel.homeWashForbidden) {
    score -= 12;
    reasons.push("表示上は家庭洗濯不可です。");
  }

  if (includesMaterial(materials, "polyester", 50)) score += 20;
  if (includesMaterial(materials, "nylon", 50)) score += 15;
  if (includesMaterial(materials, "cotton", 50) && !data.hasInterlining && !data.hasDecoration) score += 10;
  if (!data.hasLining) score += 12;
  if (!data.hasDecoration) score += 12;
  if (!data.hasInterlining) score += 15;

  if (includesMaterial(materials, "rayon", 50)) score -= 25;
  if (includesMaterial(materials, "cupro")) score -= 20;
  if (includesMaterial(materials, "silk")) score -= 30;
  if (includesMaterial(materials, "wool", 50)) score -= 25;
  if (includesMaterial(materials, "cashmere")) score -= 30;
  if (includesMaterial(materials, "fakeLeather") || data.category === "合皮アイテム") score -= 35;
  if (data.hasInterlining) score -= 30;
  if (["ジャケット", "コート"].includes(data.category)) score -= 30;
  if (data.hasDecoration) score -= 25;
  if (data.price >= 30000) score -= 20;
  if (data.homeWashNeed === "必須") score -= 8;

  score = clamp(score);
  if (score >= 80) {
    return {
      score,
      title: "自己責任なら家洗い可能性高め",
      text: `${reasons.join(" ")}素材・構造上は比較的水洗いに向きます。洗う場合はおしゃれ着用洗剤で短時間の押し洗い、タオル脱水、形を整えて陰干しが安全です。`,
    };
  }
  if (score >= 60) {
    return {
      score,
      title: "条件付きで可能",
      text: `${reasons.join(" ")}目立たない部分で色落ちテストを行い、こすらず短時間の手洗いに限定してください。失敗したくない場合はクリーニング推奨です。`,
    };
  }
  if (score >= 40) {
    return {
      score,
      title: "かなり慎重",
      text: `${reasons.join(" ")}素材または構造に不安があります。お気に入り・高額品・型崩れNGの場合は表示通りのケアを選んでください。`,
    };
  }
  return {
    score,
    title: "家洗い非推奨",
    text: `${reasons.join(" ")}縮み・歪み・型崩れ・風合い変化の可能性が高いため、家庭洗濯は避けた方が安全です。`,
  };
}

function buildOneLine(judgment, data, careScore, durabilityScore, priceScore) {
  if (judgment.label === "買い") {
    return "素材・ケア・価格のバランスがよく、用途に対して後悔しにくい一着です。";
  }
  if (judgment.label === "条件付きで買い") {
    return "魅力があるなら選択肢に入ります。ケア方法と寿命の期待値を合わせると失敗しにくいです。";
  }
  if (judgment.label.includes("セール")) {
    return "定価では慎重ですが、短期使用やセール価格なら現実的な選択肢です。";
  }
  if (careScore < 45) {
    return "家で気軽に洗いたい人には不向きです。ケアできる前提なら検討できます。";
  }
  if (durabilityScore < 50 || priceScore < 50) {
    return "素材・耐久性・価格のどこかに不安があります。長く着たい場合は見送り寄りです。";
  }
  return `${data.useCase}用途では条件を確認してから判断したい商品です。`;
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function renderResult(result) {
  $("emptyState").classList.add("hidden");
  $("resultContent").classList.remove("hidden");
  $("resultBadge").textContent = result.judgment.label;
  $("resultBadge").className = `result-badge ${result.judgment.className}`;
  $("totalScore").textContent = result.scores.total;
  $("oneLineSummary").textContent = result.oneLine;
  $("homeWashTitle").textContent = `${result.homeWash.title}（${result.homeWash.score}点）`;
  $("homeWashText").textContent = result.homeWash.text;

  setMeter("materialScore", result.scores.materialScore);
  setMeter("durabilityScore", result.scores.durabilityScore);
  setMeter("careScore", result.scores.careScore);
  setMeter("priceScore", result.scores.priceScore);
  setMeter("useScore", result.scores.useScore);

  renderList("goodPoints", result.good.length ? result.good : ["大きな加点要素はまだ見つかっていません。素材タグや構造情報を追加すると精度が上がります。"]);
  renderList("warnings", result.warnings.length ? result.warnings : ["大きな注意点は少なめです。実物では縫製と透け感を確認してください。"]);
  renderList("goodFor", result.goodFor);
  renderList("avoidFor", result.avoidFor.length ? result.avoidFor : ["特に強い不向き条件は出ていません。"]);
  renderList("checklist", result.checklist);
}

function setMeter(id, value) {
  const meter = $(id);
  meter.value = value;
  meter.nextElementSibling.textContent = value;
}

function renderList(id, items) {
  const list = $(id);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

$("diagnosisForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderResult(diagnose(getFormData()));
});

async function handleTagImageChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  selectedTagFile = file;
  $("retryOcrButton").disabled = false;
  const image = document.createElement("img");
  image.alt = "タグ画像プレビュー";
  image.src = URL.createObjectURL(file);
  $("imagePreview").textContent = "";
  $("imagePreview").appendChild(image);
  await readTagImage(file);
}

$("tagCamera").addEventListener("change", handleTagImageChange);
$("tagImage").addEventListener("change", handleTagImageChange);

$("retryOcrButton").addEventListener("click", async () => {
  if (!selectedTagFile) return;
  await readTagImage(selectedTagFile);
});

$("sampleButton").addEventListener("click", () => {
  $("tagText").value = "表地 レーヨン70% ポリエステル30%\n裏地 ポリエステル100%\n家庭洗濯不可 / タンブル乾燥不可 / ドライクリーニング可";
  $("category").value = "ワンピース";
  $("price").value = "9800";
  $("useCase").value = "普段着";
  $("frequency").value = "週2〜3回";
  $("lifespan").value = "2〜3年";
  $("homeWashNeed").value = "必須";
  $("dryerUse").value = "使わない";
  $("hasLining").checked = true;
  $("hasInterlining").checked = false;
  $("hasDecoration").checked = false;
  renderResult(diagnose(getFormData()));
});

$("shareButton").addEventListener("click", async () => {
  const shareData = {
    title: "買っていい服診断",
    text: shareText,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    $("shareButton").textContent = "URLをコピーしました";
  } catch {
    $("shareButton").textContent = "共有できませんでした";
  } finally {
    window.setTimeout(() => {
      $("shareButton").textContent = "友達に共有";
    }, 2200);
  }
});

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

async function readTagImage(file) {
  if (!window.Tesseract) {
    $("ocrStatus").textContent = "文字読み取りを読み込めませんでした。ネット接続を確認してください。";
    return;
  }

  $("ocrStatus").textContent = "文字を読み取り中です。少し待ってください。";
  $("retryOcrButton").disabled = true;

  try {
    const preparedImage = await prepareImageForOcr(file);
    const result = await Tesseract.recognize(preparedImage, "jpn+eng", {
      workerPath: "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/worker.min.js",
      corePath: "https://cdn.jsdelivr.net/npm/tesseract.js-core@5/tesseract-core.wasm.js",
      langPath: "https://tessdata.projectnaptha.com/4.0.0",
      logger: (message) => {
        if (message.status === "loading tesseract core") {
          $("ocrStatus").textContent = "文字読み取りの準備中です。";
        }
        if (message.status === "loading language traineddata") {
          $("ocrStatus").textContent = "日本語読み取りデータを読み込み中です。";
        }
        if (message.status === "recognizing text") {
          const percent = Math.round((message.progress || 0) * 100);
          $("ocrStatus").textContent = `文字を読み取り中です ${percent}%`;
        }
      },
    });
    const text = cleanupOcrText(result.data.text);

    if (!text) {
      $("ocrStatus").textContent = "文字を読み取れませんでした。明るく、タグ全体が入るように撮り直してください。";
      return;
    }

    $("tagText").value = text;
    $("ocrStatus").textContent = "読み取りました。間違いがあれば下の文字を直してください。";
  } catch (error) {
    $("ocrStatus").textContent = `読み取りに失敗しました。写真を明るく撮り直してください。${error?.message ? ` (${error.message.slice(0, 48)})` : ""}`;
  } finally {
    $("retryOcrButton").disabled = !selectedTagFile;
  }
}

async function prepareImageForOcr(file) {
  const image = await loadImage(file);
  const maxSide = 1800;
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    const boosted = gray > 175 ? 255 : gray < 95 ? 0 : gray * 1.12;
    data[i] = boosted;
    data[i + 1] = boosted;
    data[i + 2] = boosted;
  }
  context.putImageData(imageData, 0, 0);

  return canvas.toDataURL("image/jpeg", 0.92);
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("画像形式を読めません"));
    };
    image.src = url;
  });
}

function cleanupOcrText(text) {
  return normalizeOcrDigits(text)
    .replace(/[|｜]/g, " ")
    .replace(/[％﹪]/g, "%")
    .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeOcrDigits(text) {
  const digitMap = {
    "⓪": "0",
    "①": "1",
    "②": "2",
    "③": "3",
    "④": "4",
    "⑤": "5",
    "⑥": "6",
    "⑦": "7",
    "⑧": "8",
    "⑨": "9",
    "⑩": "10",
  };
  return text.replace(/[⓪①②③④⑤⑥⑦⑧⑨⑩]/g, (value) => digitMap[value] || value);
}

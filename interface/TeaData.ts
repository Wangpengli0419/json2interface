 interface  employee  {
	id: number;
	job: number;
	name: string;
	pic: string;
	ad_duration: number;
	vigor: number;
	min_time: number;
	normal_time: number;
	max_time: number;
	comment: string;
	funll_click: number;
}
 interface  ingredient  {
	id: number;
	category: number;
	sub_category: number;
	item_name: string;
	drink_name: string;
	consume: number;
	picture: string;
	rare: number;
	price: number;
	good: number;
	exp: number;
	level: number;
	shop_price: number;
	appear_shop: number;
	usage: number;
	resource: string;
	compensation: number;
	quest_reward_rare: number;
	quest_reward_normal: number;
	rare_display: string;
}
 interface  ingredient_level  {
	level: number;
	exp: number;
}
 interface  advance_ingredient  {
	id: number;
	item_name: string;
	rare: number;
	consume: number;
	type: number;
	produce_level: number;
	picture: string;
	tea_bg: number;
	column8: number;
	tier1_weight: number;
	tier2_weight: number;
	tier3_weight: number;
}
 interface  master_level  {
	master_level: number;
	master_exp: number;
	pic: string;
}
 interface  master_gift  {
	id: number;
	item_name: string;
	exp: number;
	type: number;
	count: number;
}
 interface  drink  {
	id: number;
	name: string;
	desc: string;
	recipe_desc: string;
	ingredient_count: number;
	picture: string;
	level: number;
	story_id: number;
	hint1: string;
	hint2: string;
	hint3: string;
	hint_count: number;
	column12: string;
	column13: string;
	column14: string;
	column15: string;
	column16: string;
	column17: string;
	column18: string;
	column19: string;
	column20: string;
	column21: string;
}
 interface  drink_rename  {
	溶剂: string;
	id: string;
	name: string;
	comment: string;
	class1: number;
	class2: number;
	class3: string;
	class4: string;
	shake0: string;
	shake1: string;
	shake2: string;
	column11: string;
	column12: string;
	column13: string;
	column14: string;
	column15: string;
	column16: string;
	column17: string;
	column18: string;
	column19: string;
	column20: string;
	column21: string;
	column22: string;
	column23: string;
}
 interface  recipe_book  {
	id: number;
	name: string;
	comment: string;
	ingredient_count: number;
	ingredient1: number;
	ingredient2: number;
	ingredient3: number;
	ingredient4: number;
	shake0: number;
	shake1: number;
	shake2: number;
	drink_id: number;
	score: number;
	good: number;
	price: number;
	exp: number;
	level_unlock: number;
	basic_price: number;
	basic_good: number;
	basic_score: number;
	basic_exp: number;
	rare: number;
	score_weight: number;
	extra_score: number;
}
 interface  class_recipe  {
	id: number;
	class1: number;
	class2: number;
	example1: string;
	example2: string;
	match: number;
	shake0: number;
	shake1: number;
	shake2: number;
	name0: string;
	name1: string;
	name2: string;
	extra_pic: string;
}
 interface  drink_score_base  {
	level: number;
	max_price: number;
	max_good: number;
	max_score: number;
	max_exp: number;
	shop_price: number;
	normal_price: number;
	rare_price: number;
	excellent_price: number;
	legendary_price: number;
	normal_good: number;
	rare_good: number;
	excellent_good: number;
	legendary_good: number;
	normal_score: number;
	rare_score: number;
	excellent_score: number;
	legendary_score: number;
	normal_exp: number;
	rare_exp: number;
	excellent_exp: number;
	legendary_exp: number;
}
 interface  quest  {
	id: number;
	type: number;
	desc: string;
	max_count: number;
	reward_type: string;
	reward_count: string;
}
 interface  quest_reward  {
	id: number;
	name: string;
}
 interface  guest  {
	id: number;
	name: string;
	desc: string;
	pic: string;
	job: number;
	appear_rate: number;
	level: number;
	loot: number;
	loot_rate: number;
	comment: string;
	recipe_loot: number;
}
 interface  guest_level  {
	lv: number;
	exp: number;
}
 interface  guest_story  {
	id: number;
	guest_id: number;
	story_id: number;
	title: string;
	unlock_condition: number;
	type: number;
	drink_id: number;
	column7: string;
	column8: string;
	column9: string;
}
 interface  story_detail  {
	id: number;
	story_id: number;
	pic: string;
	location: number;
	text: string;
	extra_effect: string;
	color: string;
}
 interface  guest_job  {
	id: number;
	name: string;
}
 interface  shop  {
	id: number;
	item: number;
	price: number;
	level_unlock: number;
	weight: number;
	rare: number;
}
 interface  other_price  {
	decoration: string;
	column1: string;
}
 interface  decoration  {
	id: number;
	name: string;
	suit: number;
	price: number;
	bargain: number;
	init: number;
	pic: string;
	level_unlock: number;
	unlock_desc: string;
	column9: string;
}
 interface  decoration_suit  {
	id: number;
	name: string;
	pic: string;
	count: number;
	buff_desc: string;
	guest_type: number;
}
 interface  level_unlock  {
	level: number;
	badge: string;
	point_count: number;
	levelup_exp: number;
	ingredient_unlock: string;
}
 interface  normal_tutor_lv  {
	tutor: number;
	level: number;
	priority: number;
	pic: string;
	text: string;
	comment: string;
}
 interface  function_unlock  {
	id: number;
	func_name: string;
	level: number;
	unlock_view: string;
}
 interface  tag  {
	id: number;
	tag_name: string;
	picture: string;
}
 interface  score_chat  {
	id: number;
	chat: string;
	condition: number;
	column3: string;
}
 interface  tip  {
	id: number;
	text: string;
}
 interface  giude_data  {
	id: number;
	giudeType: number;
	rectangleData: string;
	dataLab: string;
	hand_orientation: number;
	intervalTime: number;
}
 interface  global_variable  {
	id: number;
	name: string;
	value: number;
	comment: string;
}

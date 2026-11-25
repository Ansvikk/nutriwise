const test=require('node:test');const assert=require('node:assert/strict');const {FOODS}=require('../data');const P=require('../planner');const p={age:24,sex:'male',height:170,weight:70,activity:1.55,goal:'maintain',diet:'vegetarian',budget:200,exclude:'none'};
test('BMI and BMR computed correctly',()=>{const m=P.metrics(p);assert.equal(m.bmi,24.2);assert.equal(m.bmr,1648);assert.equal(m.tdee,2554);});
test('seven days with four meal slots each',()=>{const r=P.generate(p,FOODS);assert.equal(r.days.length,7);for(const d of r.days)assert.equal(d.items.length,4);});
test('vegetarian restriction respected',()=>{const r=P.generate(p,FOODS);assert.ok(r.days.every(d=>d.items.every(f=>f.category==='veg')));});
test('egg allowed but meat excluded for eggetarian',()=>{const r=P.generate({...p,diet:'eggetarian'},FOODS);assert.ok(r.days.every(d=>d.items.every(f=>f.category!=='meat')));});
test('ingredient exclusion respected',()=>{const r=P.generate({...p,exclude:'milk'},FOODS);assert.ok(r.days.every(d=>d.items.every(f=>!f.tags.includes('milk'))));});
test('tight budget reports violations rather than hiding them',()=>{const r=P.generate({...p,budget:50},FOODS);assert.equal(r.feasible,false);assert.ok(r.warnings.some(w=>w.includes('Budget')));});
test('invalid age rejected',()=>assert.throws(()=>P.generate({...p,age:12},FOODS),/age/));

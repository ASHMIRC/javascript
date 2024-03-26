let alien={
    name:'ashmi',
    age:3,
    wish:{
        father:'raja',
        worker:'hardworker'
    }
}
for(let key in alien){
    console.log(key,alien[key])
}

for (let h in alien.wish){
    console.log(h,alien.wish[h])
}

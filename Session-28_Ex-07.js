let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

];

let filter = students.filter((student) => {
    let scores = student.scores;
    let average = (scores.math + scores.english + scores.literature) / students.length;
    return average >= 8;
});

console.log(filter);

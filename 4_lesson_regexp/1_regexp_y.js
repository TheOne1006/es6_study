var s = "aaa_aa_a";
var r = /a+_/y; // 无法证实

r.exec(s); // ["aaa_"]
r.exec(s); // ["aa_"]

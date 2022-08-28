//q1
let string =
  "'Love is the best thing in this world. Some found their love and some are still looking for their love.'";
let pattern = /love/gi;
console.log(string.match(pattern));
//q2
let stringC =
  "'You cannot end a sentence with because because because is a conjunction'";
let patternC = /because/gi;
console.log(stringC.match(patternC));
//q3
let sentence =
  "'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'";
console.log(
  sentence
    .replace("%I", "I")
    .replace("$am@%", "am")
    .replace("%tea@cher%,", "teacher")
    .replace("&and&", "and")
    .replace("lo%#ve", "love")
    .replace("%te@a@ching%", "teaching")
    .replace("The@re", "There")
    .replace("$is", "is")
    .replace("no@th@ing;", "nothing")
    .replace("&as&", "as")
    .replace("mo@re", "more")
    .replace("educa@ting", "educating")
    .replace("&and&", "and")
    .replace("@emp%o@weri@ng", "empowering")
    .replace("peo@ple", "people")
    .replace(" ;I", "I")
    .replace("tea@ching", "teaching")
    .replace("m%o@re", "more")
    .replace("tha@n", "than")
    .replace("ot#her", "other")
    .replace("%jo@bs", "jobs")
    .replace("%Do@es", "Does")
    .replace("thi%s", "this")
    .replace("mo@tiv#ate", "motivate")
    .replace("yo@u", "you")
    .replace("tea@cher!", "teacher")
    .replace("%Th#is", "This")
    .replace("30#Days&OfJavaScript", "30DaysOfJavaScript")
    .replace("&is", "is")
    .replace("al@so", "also")
    .replace("$the", "the")
    .replace("$resu@lt", "result")
    .replace("&love&", "love")
    .replace("tea&ching", "teaching")
);
//q4
let salPerMonth = 5000;
let annualBonus = 10000;
let onlineCourse = 15000;
console.log(
  `Total annual income of the person is ${
    salPerMonth + annualBonus + onlineCourse
  }.`
);

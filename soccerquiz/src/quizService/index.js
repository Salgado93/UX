const qBank = [
    {
        question:
        "En qué año se fundó el FC Barcelona?",
        answers: ["1900","1890","1890","1899"],
        correct: "1899",
        questioId: "1"
    },
    {
        question:
        "",
        answers: ["Liga Calcio","Eredivisie","Bundesliga","Liga BBVA"],
        correct: "Bundesliga",
        questioId: "2"
    },
    {
        question:
        "Cuántos equipos juegan en la Liga BBVA?",
        answers: ["21","18","20","19"],
        correct: "20",
        questioId: "3"
    },
    {
        question:
        "Quien gano la Copa del Mundo en 1994?",
        answers: ["Italia","Alemania","Brasil","Uruguay"],
        correct: "Brasil",
        questioId: "4"
    },
    {
        question:
        "En la FIFA cuanto tiempo un portero puede tener el balon?",
        answers: ["5 Segundos","10 Segundos","4 Segundos","9 Segundos"],
        correct: "5 Segundos",
        questioId: "5"
    },
    {
        question:
        "Que equipo ha ganado mas Mundiales?",
        answers: ["Italia","Alemania","Brasil","España"],
        correct: "Brasil",
        questioId: "6"
    },
    {
        question:
        "Que jugador ha marcado mas goles en Mundiales?",
        answers: ["Ronaldo","Zidane","Pele","Miroslav Klose"],
        correct: "Miroslav Klose",
        questioId: "7"
    },
    {
        question:
        "Que jugador anoto el gol mas lejano?",
        answers: ["Ricardo Oliveira","Asmir Begovic","Lionel Messi","Zlatan"],
        correct: "Asmir Begovic",
        questioId: "8"
    },
    {
        question:
        "Que jugador ha jugado en mas clubes?",
        answers: ["Landon Donovan","Sebastian Abreu","Jesus Navas","Luis Figo"],
        correct: "Sebastian Abreu",
        questioId: "9"
    },
    {
        question:
        "Que entrenador ha dirigido mas partido con una sola selección a nivel mundial?",
        answers: ["Gerardo Martino","Oscar Tabarez","Jose Mourihno","Reinald Rueda"],
        correct: "Oscar Tabarez",
        questioId: "10"
    },
    {
        question:
        "Cual es el club que más veces ha ganado la Copa Mundial de Clubes de la FIFA?",
        answers: ["Manchester United","Real Madrid","Barcelona","Liverpool"],
        correct: "Real Madrid",
        questioId: "11"
    },
    {
        question:
        "Cual es el equipo con mayor cantidad de partidos consecutivos invicto de local en liga?",
        answers: ["Barcelona","Juventus","Boca Juniors","Real Madrid"],
        correct: "Real Madrid",
        questioId: "12"
    },
    {
        question:
        "Jugador con más goles oficiales anotados en una misma temporada? (Club y Seleccion)",
        answers: ["Cristiano Ronaldo","Lionel Messi","Henry","Luis Suarez"],
        correct: "Lionel Messi",
        questioId: "13"
    },
    {
        question:
        "Quien fue el unico jugador del Liverpool en fallar un penal en la final de liga de campeones 2005?",
        answers: ["Xabi Alonos","Luis Garcia","John Arne","Djibril Cisse"],
        correct: "Djibril Cisse",
        questioId: "14"
    },
    {
        question:
        "Seleccion Campeon del Mundo 2018",
        answers: ["Brasil","Francia","Croacia","Portugal"],
        correct: "Francia",
        questioId: "15"
    },
];
export default (n=5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0,n));
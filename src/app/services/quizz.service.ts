import { Injectable } from '@angular/core';
import { Quiz } from '../Interfaces/quizz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private quiz : Quiz = {
    "titre": "HTML ET CSS",
    "idQuizz": 24,
    "questions": [
        {
            "idQuestion": 47,
            "question": "Quel est la capitale du maroc ?",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 97,
                    "reponse": "Rabat",
                    "verite": 1,
                    "idQuestion": 47
                },
                {
                    "idReponse": 98,
                    "reponse": "ea",
                    "verite": 0,
                    "idQuestion": 47
                },
                {
                    "idReponse": 99,
                    "reponse": "ea",
                    "verite": 0,
                    "idQuestion": 47
                },
                {
                    "idReponse": 100,
                    "reponse": "eaea",
                    "verite": 0,
                    "idQuestion": 47
                }
            ]
        },
        {
            "idQuestion": 48,
            "question": "aeea",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 101,
                    "reponse": "rar",
                    "verite": 0,
                    "idQuestion": 48
                },
                {
                    "idReponse": 102,
                    "reponse": "ff",
                    "verite": 1,
                    "idQuestion": 48
                },
                {
                    "idReponse": 103,
                    "reponse": "gd",
                    "verite": 0,
                    "idQuestion": 48
                },
                {
                    "idReponse": 104,
                    "reponse": "gdgd",
                    "verite": 0,
                    "idQuestion": 48
                }
            ]
        },
        {
            "idQuestion": 49,
            "question": "daad",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 105,
                    "reponse": "dda",
                    "verite": 0,
                    "idQuestion": 49
                },
                {
                    "idReponse": 106,
                    "reponse": "f",
                    "verite": 0,
                    "idQuestion": 49
                },
                {
                    "idReponse": 107,
                    "reponse": "fa",
                    "verite": 0,
                    "idQuestion": 49
                },
                {
                    "idReponse": 108,
                    "reponse": "fafa",
                    "verite": 1,
                    "idQuestion": 49
                }
            ]
        },
        {
            "idQuestion": 50,
            "question": "ad",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 109,
                    "reponse": "da",
                    "verite": 0,
                    "idQuestion": 50
                },
                {
                    "idReponse": 110,
                    "reponse": "da",
                    "verite": 0,
                    "idQuestion": 50
                },
                {
                    "idReponse": 111,
                    "reponse": "ad",
                    "verite": 1,
                    "idQuestion": 50
                },
                {
                    "idReponse": 112,
                    "reponse": "da",
                    "verite": 0,
                    "idQuestion": 50
                }
            ]
        },
        {
            "idQuestion": 51,
            "question": "daddd",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 113,
                    "reponse": "f",
                    "verite": 0,
                    "idQuestion": 51
                },
                {
                    "idReponse": 114,
                    "reponse": "g",
                    "verite": 0,
                    "idQuestion": 51
                },
                {
                    "idReponse": 115,
                    "reponse": "g",
                    "verite": 1,
                    "idQuestion": 51
                },
                {
                    "idReponse": 116,
                    "reponse": "h",
                    "verite": 0,
                    "idQuestion": 51
                }
            ]
        },
        {
            "idQuestion": 52,
            "question": "fqqfqf",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 117,
                    "reponse": "dq",
                    "verite": 0,
                    "idQuestion": 52
                },
                {
                    "idReponse": 118,
                    "reponse": "dq",
                    "verite": 1,
                    "idQuestion": 52
                },
                {
                    "idReponse": 119,
                    "reponse": "dq",
                    "verite": 0,
                    "idQuestion": 52
                },
                {
                    "idReponse": 120,
                    "reponse": "f",
                    "verite": 0,
                    "idQuestion": 52
                }
            ]
        },
        {
            "idQuestion": 53,
            "question": "x",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 121,
                    "reponse": "x",
                    "verite": 0,
                    "idQuestion": 53
                },
                {
                    "idReponse": 122,
                    "reponse": "X",
                    "verite": 0,
                    "idQuestion": 53
                },
                {
                    "idReponse": 123,
                    "reponse": "x",
                    "verite": 0,
                    "idQuestion": 53
                },
                {
                    "idReponse": 124,
                    "reponse": "X",
                    "verite": 0,
                    "idQuestion": 53
                }
            ]
        },
        {
            "idQuestion": 54,
            "question": "fqqfqf",
            "idQuiz": 24,
            "reponses": [
                {
                    "idReponse": 125,
                    "reponse": "dq",
                    "verite": 0,
                    "idQuestion": 54
                },
                {
                    "idReponse": 126,
                    "reponse": "dq",
                    "verite": 1,
                    "idQuestion": 54
                },
                {
                    "idReponse": 127,
                    "reponse": "dq",
                    "verite": 0,
                    "idQuestion": 54
                },
                {
                    "idReponse": 128,
                    "reponse": "f",
                    "verite": 0,
                    "idQuestion": 54
                }
            ]
        }
    ]
}
  constructor() { }

  getQuiz(){
    return this.quiz;
  }

  setQuiz(q:Quiz){
    this.quiz = q;
  }

  initQuizz(){
    return {titre:"", questions:[], idQuizz:0};
  }

}

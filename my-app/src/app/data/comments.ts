import { AppComment } from "../types/app-comment.type";

export const comments: AppComment[] = [
    {
      "id": 1,
      "parent_id": null,
      "date_time": "2020/08/13",
      "author_name": "author",
      "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "children": [
        {
          "id": 5,
          "parent_id": 1,
          "date_time": "2020/08/13",
          "author_name": "author",
          "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "children": [
            {
              "id": 9,
              "parent_id": 5,
              "date_time": "2020/08/13",
              "author_name": "author",
              "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "children": [
                {
                  "id": 13,
                  "parent_id": 9,
                  "date_time": "2020/08/13",
                  "author_name": "author",
                  "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                  "id": 14,
                  "parent_id": 9,
                  "date_time": "2020/08/13",
                  "author_name": "author",
                  "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                  "id": 15,
                  "parent_id": 9,
                  "date_time": "2020/08/13",
                  "author_name": "author",
                  "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                {
                  "id": 16,
                  "parent_id": 9,
                  "date_time": "2020/08/13",
                  "author_name": "author",
                  "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                }
              ]
            },
            {
              "id": 10,
              "parent_id": 1,
              "date_time": "2020/08/13",
              "author_name": "author",
              "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
              "id": 11,
              "parent_id": 1,
              "date_time": "2020/08/13",
              "author_name": "author",
              "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
              "id": 12,
              "parent_id": 1,
              "date_time": "2020/08/13",
              "author_name": "author",
              "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
          ]
        },
        {
          "id": 6,
          "parent_id": 1,
          "date_time": "2020/08/13",
          "author_name": "author",
          "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          "id": 7,
          "parent_id": 1,
          "date_time": "2020/08/13",
          "author_name": "author",
          "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          "id": 8,
          "parent_id": 1,
          "date_time": "2020/08/13",
          "author_name": "author",
          "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
      ]
    },
    {
      "id": 2,
      "parent_id": null,
      "date_time": "2020/08/13",
      "author_name": "author",
      "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      "id": 3,
      "parent_id": null,
      "date_time": "2020/08/13",
      "author_name": "author",
      "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      "id": 4,
      "parent_id": null,
      "date_time": "2020/08/13",
      "author_name": "author",
      "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  ]
  
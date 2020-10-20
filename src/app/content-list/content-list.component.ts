import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  stuff: Content[];
  constructor() {
    this.stuff = [{
      id: 0,
      author: 'Saad Amjad',
      imageUrl: 'https://cdn.discordapp.com/attachments/485235180106285069/765811857326997504/EkPJ1E1VcAAxn9G.png',
      type: 'reddit post',
      title: 'Man loses a bet',
      body: 'Man loses a bet and has to live in third person for a day',
      tags: ['funny', ' cringe']
    },
    {
      id: 1,
      author: 'Yonis',
      imageUrl: 'https://cdn.discordapp.com/attachments/467129776470097920/766136159872221204/Z.png',
      type: 'guide',
      title: 'How to build Bakasura (Smite)',
      body: 'Build protections. Basically go full tank build',
      tags: ['troll', ' pro gamer']
    },
    {
      id: 2,
      author: 'Joe',
      imageUrl: 'https://cdn.discordapp.com/attachments/467129776470097920/766137240870584320/eso1907a.png',
      type: 'news',
      title: 'Picture of a black hole',
      body: 'First picture of a black hole taken ever',
      tags: ['space']
    },
    {
      id: 3,
      author: 'Bob',
      imageUrl: 'https://cdn.discordapp.com/attachments/467129776470097920/766137760964149248/100k-moon.png',
      type: 'news',
      title: 'Lorem Ipsum',
      body: 'Lorem Ipsum',
      tags: ['space', ' moon']
    },
    {
      id: 4,
      author: 'Jack',
      imageUrl: 'https://cdn.discordapp.com/attachments/467129776470097920/766140415253938216/d6ab5b121ef1967d384ca5fad1d24980.png',
      type: 'photography',
      title: 'Lorem Ipsum',
      body: 'Lorem Ipsum',
      tags: ['landscape', ' moon']
    }
    ];
  }

  ngOnInit(): void {
  }

  searchArray(value: string, array: Content[]): void {
    let incrementer = 0;
    for (const entry of array) {
      if (entry.title === value) {
        incrementer++;
        console.log('Item exists');
      }
    }
    if (incrementer === 0) {
      console.log('Item does not exist');
    }
  }
}

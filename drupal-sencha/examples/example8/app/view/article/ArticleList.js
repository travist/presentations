Ext.define('DrupalTouch.view.article.ArticleList', {
  extend: 'Ext.List',
  xtype: 'articlelist',
  config: {
    cls: 'articlelist',
    itemTpl: new Ext.XTemplate(
      '<div class="result-item">',
        '<div class="result-item-img">',
          '<img src="{thumbnail}" width="80px">',
        '</div>',
        '<div class="result-item-info">',
          '<h2 class="result-item-title">{title}</h2>',
          '<p class="result-item-desc">{description:ellipsis(120,true)}</p>',
        '</div>',
      '</div>'
    ),
    data: [
      {
        title: 'Matagascar III',
        description: 'Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style.',
        preview: 'http://www.movieposter.com/posters/archive/main/143/MPW-71686',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/143/MPW-71686',
      },
      {
        title: 'Snow White and the Huntsman',
        description: 'In a twist to the fairy tale, the Huntsman ordered to take Snow White into the woods to be killed winds up becoming her protector and mentor in a quest to vanquish the Evil Queen.',
        preview: 'http://www.movieposter.com/posters/archive/main/142/MPW-71148',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/142/MPW-71148'
      },
      {
        title: 'Men in Black III',
        description: 'Agent J travels in time to M.I.B.\'s early days in 1969 to stop an alien from assassinating his friend Agent K and changing history.',
        preview: 'http://www.movieposter.com/posters/archive/main/146/MPW-73434',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/146/MPW-73434'
      },
      {
        title: 'The Three Stooges',
        description: 'While trying to save their childhood orphanage, Moe, Larry, and Curly inadvertently stumble into a murder plot and wind up starring in a reality TV show.',
        preview: 'http://www.movieposter.com/posters/archive/main/143/MPW-71689',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/143/MPW-71689'
      },
      {
        title: 'The Hunger Games',
        description: 'Katniss Everdeen voluntarily takes her younger sister\'s place in the Hunger Games, a televised fight to the death in which two teenagers from each of the twelve Districts of Panem are chosen at random to compete.',
        preview: 'http://www.movieposter.com/posters/archive/main/148/MPW-74360',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/148/MPW-74360'
      },
      {
        title: 'Se7en',
        description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.',
        preview: 'http://www.movieposter.com/posters/archive/main/84/MPW-42060',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/84/MPW-42060'
      },
      {
        title: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        preview: 'http://www.movieposter.com/posters/archive/main/9/A70-4902',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/9/A70-4902'
      },
      {
        title: 'Amelie',
        description: 'Amelie, an innocent and naive girl in Paris, with her own sense of justice, decides to help those around her and along the way, discovers love.',
        preview: 'http://www.movieposter.com/posters/archive/main/91/MPW-45860',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/91/MPW-45860'
      },
      {
        title: 'The Prestige',
        description: 'The rivalry between two magicians becomes more exacerbated by their attempt to perform the ultimate illusion.',
        preview: 'http://www.movieposter.com/posters/archive/main/76/MPW-38403',
        thumbnail: 'http://www.movieposter.com/posters/archive/main/76/MPW-38403'
      }
    ],
    onItemDisclosure: true
  }
});
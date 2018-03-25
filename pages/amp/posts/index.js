// @flow
import React from 'react'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>The Dog</title>
      <script
        async
        custom-element="amp-youtube"
        src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
      />
    </Head>
    <h1>The Dog</h1>
    <amp-img
      src="/static/images/pic01.jpg"
      width="470"
      height="350"
      layout="responsive"
      alt="Woof"
    />
    <p className="caption">Woooooooooooof</p>
    <p>
      Wafer donut candy soufflé lemon drops icing. Marzipan gummi bears pie
      danish lollipop pudding powder gummi bears sweet. Pie sweet roll sweet
      roll topping chocolate bar dragée pudding chocolate cake. Croissant sweet
      chocolate bar cheesecake candy canes. Tootsie roll icing macaroon bonbon
      cupcake apple pie candy canes biscuit candy canes. Jujubes jelly liquorice
      toffee gingerbread. Candy tootsie roll macaroon chocolate bar icing sugar
      plum pie. Icing gummies chocolate bar chocolate marzipan bonbon cookie
      chocolate tart. Caramels danish halvah croissant. Cheesecake cookie
      tootsie roll ice cream. Powder dessert carrot cake muffin tiramisu lemon
      drops liquorice topping brownie. Soufflé chocolate cake croissant cupcake
      jelly.
    </p>
    <amp-youtube
      data-videoid="9Cfxm7cikMY"
      layout="responsive"
      width="480"
      height="270"
    />
    <p>
      Muffin gummies dessert cheesecake candy canes. Candy canes danish cotton
      candy tart dessert powder bear claw marshmallow. Muffin chocolate
      marshmallow danish. Chocolate bar biscuit cake tiramisu. Topping sweet
      brownie jujubes powder marzipan. Croissant wafer bonbon chupa chups cake
      cake marzipan caramels jujubes. Cupcake cheesecake sweet roll marshmallow
      lollipop danish jujubes jelly icing. Apple pie chupa chups lollipop
      jelly-o cheesecake jelly beans cake dessert. Tootsie roll tootsie roll
      bonbon pastry croissant gummi bears cake cake. Fruitcake sugar plum halvah
      gingerbread cookie pastry chupa chups wafer lemon drops. Marshmallow
      liquorice oat cake lollipop. Lemon drops oat cake halvah liquorice danish
      powder cupcake soufflé. Cake tart topping jelly-o tart sugar plum.
      Chocolate bar cookie wafer tootsie roll candy cotton candy toffee pie
      donut.
    </p>
  </div>
)

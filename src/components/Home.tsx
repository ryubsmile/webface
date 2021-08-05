import React from 'react';
import BigText from './BigText';

const lorem =  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut et non facilis accusantium adipisci fugiat 
                veritatis culpa perferendis quo quos voluptate quas quaerat minus aspernatur repellat minima doloribus, 
                ut rerum sed totam voluptatibus dolores a distinctio. Aperiam, dolores soluta qui mollitia hic, iusto 
                earum ea officia nesciunt, porro necessitatibus quod temporibus culpa perspiciatis nemo rerum consequuntur 
                eius aliquam? Saepe nesciunt quisquam, officia nobis totam doloremque? Ipsum quos non expedita eos qui! 
                Cumque qui voluptate et officiis tempore excepturi debitis eligendi labore architecto odio nisi repellendus 
                numquam ipsam repudiandae tenetur iure modi, expedita odit quis iste doloribus?`;

const Home: React.FC = () => {
  const subContent: string = "import Highschool from ac.kis.highschool.class2022;"

  return (
    <>
      <BigText title="Jaehyuk.ryu();" content_above={subContent}/>
      {lorem}
    </>
  );
}

export default Home;
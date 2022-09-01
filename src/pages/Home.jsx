export const Home = () => {

  $(document).ready(function() {
    $(window).scroll(function(event) {
        var s=$(this).scrollTop();
        var w=$(this).outerWidth();
        var h=$('.content').outerHeight();
        var h_b=$('.parallax').outerHeight();
        var p = s/h*100;
        var p_b = s/h_b*100;
        var o = 1-1/100*p_b;

        var z_1=1+(w/10000*p_b);
        $('.parallax__fog').css('transform', 'scale('+z_1+')');
        $('.parallax__fog').css('opacity', o);

        var z_2=1+(w/5000000*p);
        $('.parallax__mountain_1').css('transform', 'scale('+z_2+')');

        var hr=w/2000+p_b;
        var z_3=1+(w*0.00005*p_b);
        $('.parallax__mountain_2').css('transform', 'translate3d('+hr+'px,0,0) scale('+z_3+')');

        var hr_2=w/1500*p_b;
        var z_4=1+(w*0.00001*p_b);
        $('.parallax__mountain_3').css('transform', 'translate3d('+hr_2+'px,0,0) scale('+z_4+')');

    });
});



    return (
      <main>
        {/* <h1>Welcome</h1>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          laboriosam placeat incidunt rem illum animi nemo quibusdam quia
          voluptatum voluptate.
        </p> */}
        <div className="container">
        <div className="wrapper">
            <div className="page">

                    <div class="parallax">
                        <div className="parallax__mountain parallax__mountain_1"></div>
                        <div className="parallax__mountain parallax__mountain_2"></div>
                        <div className="parallax__mountain parallax__mountain_3"></div>
                        <div className="parallax__fog"></div>
                    </div>
            
                <div className="content">
                    <div className="content__body">
                        <div className="content__header">
                            <h1 className="content__title">Hello</h1>
                            <h2 className="content__subtitle">This is app for Anya Flower Shop</h2>
                        </div>
                        <div class="content__article">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis quod, corporis deleniti beatae non expedita possimus suscipit at numquam provident, est iste voluptas maxime in aperiam mollitia minus aspernatur quaerat officiis a optio? Ipsum, ipsam accusamus quae, amet incidunt quibusdam porro at facilis similique officia deleniti dolor? Sed voluptatem totam ducimus soluta labore corporis velit neque cupiditate, nisi delectus maiores recusandae nemo ipsam minus eligendi est similique consectetur quis, perspiciatis optio eveniet. Aspernatur, consequuntur natus praesentium eaque eveniet repudiandae dolores. Quisquam praesentium cupiditate voluptatem dolorum suscipit optio repudiandae voluptas facilis perferendis mollitia saepe, blanditiis placeat quos repellat! Amet optio, deleniti, qui suscipit quia hic maiores vero placeat adipisci recusandae voluptates sit vel ducimus eos sed! Aspernatur vel, dolore accusamus excepturi illo sint consequatur iste est. Rerum maxime expedita nostrum hic dolores natus ducimus vero ipsam vitae iusto voluptates odio, et assumenda est quidem deserunt fugit quis harum suscipit rem incidunt nisi. Autem a ut asperiores cupiditate dolorem suscipit quod quisquam, vel, temporibus accusamus dolore maxime magni quidem? Cum repellendus earum odit vel totam maiores doloribus. Iste exercitationem tempore alias. Blanditiis sed placeat cupiditate. Perferendis fugiat doloremque vitae reprehenderit aliquid, officia, commodi vero in soluta ab ipsa, necessitatibus debitis quas?
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis quod, corporis deleniti beatae non expedita possimus suscipit at numquam provident, est iste voluptas maxime in aperiam mollitia minus aspernatur quaerat officiis a optio? Ipsum, ipsam accusamus quae, amet incidunt quibusdam porro at facilis similique officia deleniti dolor? Sed voluptatem totam ducimus soluta labore corporis velit neque cupiditate, nisi delectus maiores recusandae nemo ipsam minus eligendi est similique consectetur quis, perspiciatis optio eveniet. Aspernatur, consequuntur natus praesentium eaque eveniet repudiandae dolores. Quisquam praesentium cupiditate voluptatem dolorum suscipit optio repudiandae voluptas facilis perferendis mollitia saepe, blanditiis placeat quos repellat! Amet optio, deleniti, qui suscipit quia hic maiores vero placeat adipisci recusandae voluptates sit vel ducimus eos sed! Aspernatur vel, dolore accusamus excepturi illo sint consequatur iste est. Rerum maxime expedita nostrum hic dolores natus ducimus vero ipsam vitae iusto voluptates odio, et assumenda est quidem deserunt fugit quis harum suscipit rem incidunt nisi. Autem a ut asperiores cupiditate dolorem suscipit quod quisquam, vel, temporibus accusamus dolore maxime magni quidem? Cum repellendus earum odit vel totam maiores doloribus. Iste exercitationem tempore alias. Blanditiis sed placeat cupiditate. Perferendis fugiat doloremque vitae reprehenderit aliquid, officia, commodi vero in soluta ab ipsa, necessitatibus debitis quas?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
      </main>
    );
  };
  
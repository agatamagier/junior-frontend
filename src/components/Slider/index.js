import React, { Component } from 'react';
import { SliderContainer, SliderImg } from "./styles";

export class Slider extends Component {
    componentDidMount() {
        function sslider() {
            let current = 0;
            let i;
            const slider = document.querySelector('[data-js="sslide"]');
            const allImages =  slider.querySelectorAll('img');
            const imgWidth = Math.ceil(50 / allImages.length);
            const sliderWidth = allImages.length * 100;

            slider.style.width = sliderWidth + '%';

            for(i = 0; i <= allImages.length - 1; i++) {
                allImages[i].style.width = imgWidth + '%';
             }

             function animateRight(cur) {
                let i = imgWidth,
                    time = 50;
                    const animate = setInterval(function() {
                if(i <= sliderWidth) {
                  allImages[cur].style.marginLeft = "-" + i + "%";
                  i--;
                } else {
                  clearInterval(animate);
                }
                }, time);  
             } 

             function reset() {
                for(i = 0; i <= allImages.length - 1; i++) {
                  animateRight(i);
                }
                // resseting the current image to the first image
                current = 0;
              }  
              
              function animateLeft(cur) {
                let i = 0;
                const time = 50;
                var animate = setInterval(function() {
                if(i <= imgWidth) {
                  allImages[cur].style.marginLeft = "-" + i  + "%";
                  i++;
                } else {
                  clearInterval(animate);
                }
                }, time);  
             }

             setInterval(function () {
                if(current <= allImages.length - 2) {
                  animateLeft(current);
                  current++;
                  
                } else {
                  reset();
                }
              }, 3000);
        }
        sslider();
    }

    render() {
        return (
            <SliderContainer>
                <div class="slider" data-js="sslide">
                    <SliderImg src={ require("./photos/slide-1.jpg")} />
                    <SliderImg src={ require("./photos/slide-2.jpg")} />
                    <SliderImg src={ require("./photos/slide-3.jpg")} />
                    <SliderImg src={ require("./photos/slide-4.jpg")} />
                    <SliderImg src={ require("./photos/slide-5.jpg")} />
                    <SliderImg src={ require("./photos/slide-6.jpg")} /> 
                </div>
            </SliderContainer>
            )
        }
}
    
 

export default Slider;
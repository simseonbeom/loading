
    export class Footer extends HTMLElement{


      constructor(){ // 생성자 엘리먼트 함수 초기화 
          super(); 
          this.attachShadow({mode:'open'});
          this.render();
          
      }

      connectedCallback(){ // 컴포넌트가 생성될 때 실행 
          this.render(); 

          
      }
      adoptCallback(){ // 해당요소가 문서로 이동 될 때마다 호출
          
      }
      attributeCangedCallback(attName,oldVal, newVal){ // 관찰 및 업데이트 호출 
          this.rander();
      }

      //  관찰 항목 리턴 
      static get observedAttributes(){
          return ['title'];
      }


      get title(){
          return this.getAttribute('title');
      }

      disconnectedCallback(){ // 컴포넌트 제거될 때 호출 
          alert('bye ~');
      }

      render(){
        this.shadowRoot.innerHTML=`
              <style>
                  footer{
                      position:fixed;
                      left:0;
                      bottom:0;
                      z-index:100;
                      width:100vw;
                      background:gray;
                      color: #fff;
                      padding: 1rem;
                      text-align:center;
                  }
                  ul{
                      list-style:none;
                  }
                  
              </style>


              <footer id=${this.title}>
                FOOTER
                    <ul>
                    <li></li>
                    </ul>
              </footer>
              
          `;
      }

  }   


  window.customElements.define('c-footer',Footer);
  
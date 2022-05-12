// let header = document.querySelector('.header');

    
export class Header extends HTMLElement {
  constructor() {
    // 생성자 엘리먼트 함수 초기화
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
    this.addEventListener('click',this.handleClick);

    
  }

  handleClick(e){
    let header = this.shadowRoot.querySelector('#header');
    let logo = header.querySelector('.logo');
    let ul = header.querySelector('ul');      
    


    gsap.to(header,{background:'blue'});
    gsap.to(logo,{scale:2});


  }


  connectedCallback() {
    // 컴포넌트가 생성될 때 실행
    this.render();
  }
  adoptCallback() {
    // 해당요소가 문서로 이동 될 때마다 호출
  }
  attributeCangedCallback(attName, oldVal, newVal) {
    // 관찰 및 업데이트 호출
    this.rander();
  }

  //  관찰 항목 리턴
  static get observedAttributes() {
    return ['title'];
  }

  get title() {
    return this.getAttribute('title');
  }

  disconnectedCallback() {
    // 컴포넌트 제거될 때 호출
    alert('bye ~');
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                ul{
                    list-style:none;
                    display:flex;
                    align-items:center;
                }

                ul > li{
                    margin-left: 1rem;
                }
                header{
                    background:#fff;
                    padding:0.5rem 1rem ;
                    font-size:15px;
                    display:flex;
                    justify-content:space-between;
                    
                }
            </style>
            <header id=${this.title}>
                <h1 class="logo">🐶</h1>
                <ul class="gnb">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTECT</li>
                </ul>
            </header>
            
        `;
  }
}





window.customElements.define('c-header', Header);

class Test{
    constructor(panel){
        this.panel = panel;
        this.title = 'test';
        // tab , page , index
    }
    render(){
        this.page.innerHTML = 'test page '+this.index
    }
    mounted(){
        this.render('')
    }
    onShow(){
        // console.log(this.title+' show')
    }
    onHide(){
        // console.log(this.title+' hide')
    }
    onPageResize(size){
        
    }
}
if(window.TCon){
    window.TCon.use(Test);
}
export default Test;
class Network{
    constructor(panel){
        this.panel = panel;
        this.title = 'networks';
        // tab , page , index
    }
    render(){
        this.page.innerHTML = this.title+' page '+this.index
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
    window.TCon.use(Network);
}
export default Network;
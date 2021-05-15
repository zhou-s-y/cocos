// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property
    step: number = 20;
    @property
    toWardsLeft = true;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('mousedown',this.moveLeft,this);
    }

    start () {
        cc.log('change')
    }
    moveLeft(){
        if(this.toWardsLeft){
            this.node.x -= this.step;
        }else{
            this.node.x += this.step;
        }
    }

    // update (dt) {}
}

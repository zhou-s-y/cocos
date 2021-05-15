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
        
    }
    moveLeft(){
        if(this.toWardsLeft){
            let target = cc.find('Canvas/cat');
            target.x -=this.step;
        }else{
            let target = cc.find('Canvas/left');
            target.x +=this.step;
        }
    }

    // update (dt) {}
}

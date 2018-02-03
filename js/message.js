!function(){
    var view = document.querySelector('section.message')

    var model = {
        init:function() {
            //初始化
            var APP_ID = 'FqPJXxCv1gabu5JMeHrved6l-gzGzoHsz';
            var APP_KEY = 'Eevd4W01afMxVUg9s2pDDTr4';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch:function(){  //获取数据
            var query = new AV.Query('Message5');
            return query.find()  //Promise对象
        },
        save:function(name,content){  //存储数据
            var Message = AV.Object.extend('Message5');
            var message = new Message();

            return message.save({  //Promise对象
                'name': name,
                'content':content
            })
        }
    }

    var controller = {
        view:null,
        model:null,
        messageList:null,
        init:function(view,model){
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        //加载Message
        loadMessages:function() {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item)=> item.attributes)
                    array.forEach((item)=> {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                }
            )
        },
        //绑定事件
        bindEvents:function(){
            this.form.addEventListener('submit',function(e){
                e.preventDefault()
                //this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value

            this.model.save(name,content).then(function(object){
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                console.log(object)
            })
        }
    }
    controller.init(view,model)
}.call()
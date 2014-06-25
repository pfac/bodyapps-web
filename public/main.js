/*
 * Copyright (c) 2014, Fashiontec (http://fashiontec.org)
 * Licensed under LGPL, Version 3
 */

/*
 * Application of the frontend.
 * 
 * Handles the rendering of the data , i.e. make
 * calls to database to fetch and save the data.
 * And display view on the website page.
 */

var MeasurementModel = Backbone.Model.extend({
  defaults: {
    data : {
      m_id: '',
      m_unit: '',
      m_timestamp: '',
      mid_neck_girth : '',
      bust_girth : '',
      waist_girth : '',
      hip_girth : '',
      across_back_shoulder_width : '',
      shoulder_drop : '',
      shoulder_slope_degrees :'',
      arm_length : '',
      wrist_girth : '',
      upper_arm_girth : '',
      armscye_girth : '',
      height : '',
      hip_height :'',
      person : {
        name: '',
        email_id:'',
        gender:'',
        dob:''
      },
      user_id :''
    }
  }
  });

var Measurements = Backbone.Collection.extend({
  model:MeasurementModel,
});

function json2Array(json){
    var array = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
      array.push(json[key]);
    });
    return array;
}

var MeasurementListView = Backbone.View.extend({

  render:function(options) {
    var that = this;
    if(options.id){
      var url = 'http://localhost:3000/users/' + options.id + '/measurements';
      this.collection.url = url;
      this.collection.fetch({
        success:function(records, response){
          if(response==401) {
            window.location.href = 'http://localhost:3000/index.html#home';
          } else {
              var array = json2Array(((records).toJSON()));
              var template = _.template($('#measurement-list').html(), 
                {measurements:array});
              that.$el.html(template);
          }
        }
      })
      return that;
    }
  }
});

var MeasurementView = Backbone.View.extend({
  tagName:'tr',
  template: _.template($('#measurement-list').html()),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

var UserModel = Backbone.Model.extend({
  defaults:{
    data:{
      name: '',
      dob: '',
      age: '',
      email: ''
    }
  }
});

var UserView = Backbone.View.extend({
  template: _.template($('#user-name').html()),

  render : function(options){
    var that = this;

    this.model.url = 'http://localhost:3000/users/' + options.id;
    this.model.fetch({
      success:function(user ,response){
        if(response==401) {
          window.location.href = 'http://localhost:3000/index.html#home';
        } else {
          that.$el.html(that.template(user.toJSON()));
        }
      }
    });
    return that;
  }
});

var WelcomeView = Backbone.View.extend({
  template: _.template($('#welcome-message').html()),

  render:function() {
    this.$el.html(this.template);
    return this;
  }
});

var userModel = new UserModel();
var measurements = new Measurements();
var measurementListView = new MeasurementListView({collection:measurements});

var userView = new UserView({model:userModel});
var welcomeView = new WelcomeView();

var Router = Backbone.Router.extend({
  routes: {
    'home':'firstpage',
    'user/:id' : 'userhome',
    'user/measurements/:id' : 'user'
  },

  firstpage:function(id){
    $('#welcome-user').append(welcomeView.render().el);
  },

  userhome:function(id){
    $('#user-details').append(userView.render({id: id}).el);
  },

  user:function(id){
    $('#user-measurment-list').append(measurementListView.render({id: id}).el);
  }
});

var router = new Router();

Backbone.history.start();

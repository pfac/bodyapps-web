/*
 * Copyright (c) 2014, Fashiontec (http://fashiontec.org)
 * Licensed under LGPL, Version 3
 */

/*
 * XML creation for the  HDF export feature of bodyapps backend. 
 * 
 * XML is created using 'xmlbuilder' module 
 */

var builder = require('xmlbuilder');

var ARM_TYPE = {
  0: 'normal',
  1: 'muscular_and_developed',
  2: 'large_not_muscular'
};

var BACK_SHAPE = {
  0: 'normal',
  1: 'hunched',
  2: 'erect',
  3: 'slight_forward_stoop',
  4: 'curved_upper_back'
};

var CHEST_TYPE = {
  0: 'normal_flat_chest',
  1: 'collapsed_chest',
  2: 'muscular_and_developed',
  3: 'slight_forward_stoop',
  4: 'large_and_sagging'
};

var SHOULDER_TYPE = {
  0: 'square_shoulders',
  1: 'normal_shoulders',
  2: 'sloping_shoulders'
};

var STOMACH_SHAPE = {
  0: 'flat_stomach',
  1: 'slight_stomach',
  2: 'protruding_stomach'
};

exports.xmlString = function (measurement, user, fileNameList) {
  var doc = builder.create('hdf', {'version': '1.0', 'encoding': 'UTF-8'})
    .dtd('hdf.dtd')
    .up();
    var documentInfo = doc.ele('document_info')
      .ele('title','title')
        .up()
      .ele('created', measurement.m_created)
        .up()
      .ele('author_name', user.name)
        .up()
      .ele('author_email', user.email)
        .up()
      .ele('license', 'open source')
        .up()
      .up()
    .ele('body_definition')
      .ele('personal')
        .ele('name', measurement.person.name)
          .up()
        .ele('date_of_birth', measurement.person.dob)
          .up()
        .ele('sex', measurement.person.gender)
          .up()
      .up()
      .ele('measurements')
        .ele('unit',measurement.unit)
          .up()
        .ele('height', measurement.height)
          .up()
        .ele('head')
          .ele('head_girth', measurement.head_girth)
            .up()
          .ele('head_and_neck_length', measurement.head_and_neck_length)
            .up()
          .up()
        .ele('neck')
          .ele('mid_neck_girth', measurement.mid_neck_girth)
            .up()
          .ele('neck_base_girth', measurement.neck_base_girth)
            .up()
          .up()
        .ele('torso')
          .ele('shoulder_girth', measurement.shoulder_girth)
            .up()
          .ele('upper_chest_girth', measurement.upper_chest_girth)
            .up()
          .ele('bust_girth', measurement.bust_girth)
            .up()
          .ele('under_bust_girth', measurement.under_bust_girth)
            .up()
          .ele('waist_girth', measurement.waist_girth)
            .up()
          .ele('waist_to_hip_height', measurement.waist_to_hip_height)
            .up()
          .ele('waist_to_knee_height', measurement.waist_to_knee_height)
            .up()
          .ele('waist_height', measurement.waist_height)
            .up()
          .ele('side_waist_length', measurement.side_waist_length)
            .up()
          .ele('center_front_waist_length', 
            measurement.center_front_waist_length)
            .up()
          .ele('center_back_waist_length', measurement.center_back_waist_length)
            .up()
          .ele('shoulder_length', measurement.shoulder_length)
            .up()
          .ele('shoulder_and_arm_length', measurement.shoulder_and_arm_length)
            .up()
          .ele('upper_front_chest_width', measurement.upper_front_chest_width)
            .up()
          .ele('front_chest_width', measurement.front_chest_width)
            .up()
          .ele('across_front_shoulder_width', 
            measurement.across_front_shoulder_width)
            .up()
          .ele('across_back_shoulder_width',
            measurement.across_back_shoulder_width)
            .up()
          .ele('upper_back_width', measurement.upper_back_width)
            .up()
          .ele('back_width', measurement.back_width)
            .up()
          .ele('shoulder_width', measurement.shoulder_width)
            .up()
          .ele('bustpoint_to_bustpoint', measurement.bustpoint_to_bustpoint)
            .up()
          .ele('halter_bustpoint_to_bustpoint', 
            measurement.halter_bustpoint_to_bustpoint)
            .up()
          .ele('neck_to_bustpoint', measurement.neck_to_bustpoint)
            .up()
          .ele('shoulder_drop', measurement.shoulder_drop)
            .up()
          .ele('shoulder_slope_degree', measurement.shoulder_slope_degree)
            .up()
          .up()
        .ele('arm')
          .ele('trunk_girth', measurement.trunk_girth)
            .up()
          .ele('armscye_girth', measurement.armscye_girth)
            .up()
          .ele('elbow_girth', measurement.elbow_girth)
            .up()
          .ele('upper_arm_girth', measurement.upper_arm_girth)
            .up()
          .ele('wrist_girth', measurement.wrist_girth)
            .up()
          .ele('underarm_length', measurement.underarm_length)
            .up()
          .ele('cervical_to_wrist_length', measurement.cervical_to_wrist_length)
            .up()
          .ele('shoulder_to_elbow_length', measurement.shoulder_to_elbow_length)
            .up()
          .ele('arm_length', measurement.arm_length)
            .up()
          .ele('scye_depth', measurement.scye_depth)
            .up()
          .up()
        .ele('hand')
          .ele('hand_girth', measurement.hand_girth)
            .up()
          .ele('hand_length', measurement.hand_length)
            .up()
          .ele('hand_width', measurement.hand_width)
            .up()
          .ele('thumb_length', measurement.thumb_length)
            .up()
          .ele('index_finger_length', measurement.index_finger_length)
            .up()
          .ele('middle_finger_length', measurement.middle_finger_length)
            .up()
          .ele('ring_finger_length', measurement.ring_finger_length)
            .up()
          .ele('little_finger_length', measurement.little_finger_length)
            .up()
          .ele('thumb_width', measurement.thumb_width)
            .up()
          .ele('index_finger_width', measurement.index_finger_width)
            .up()
          .ele('middle_finger_width', measurement.middle_finger_width)
            .up()
          .ele('ring_finger_width', measurement.ring_finger_width)
            .up()
          .ele('little_finger_width', measurement.little_finger_width)
            .up()
          .ele('little_finger_length', measurement.little_finger_length)
            .up()
          .ele('thumb_girth', measurement.thumb_girth)
            .up()
          .ele('index_finger_girth', measurement.index_finger_girth)
            .up()
          .ele('middle_finger_girth', measurement.middle_finger_girth)
            .up()
          .ele('ring_finger_girth', measurement.ring_finger_girth)
            .up()
          .ele('little_finger_girth', measurement.little_finger_girth)
            .up()
          .up()
        .ele('hip')
          .ele('high_hip_girth', measurement.high_hip_girth)
            .up()
          .ele('hip_girth', measurement.hip_girth)
            .up()
          .ele('high_hip_height', measurement.high_hip_height)
            .up()
          .ele('hip_height', measurement.hip_height)
            .up()
          .ele('crotch_length', measurement.crotch_length)
            .up()
          .ele('crotch_height', measurement.crotch_height)
            .up()
          .ele('rise_height', measurement.rise_height)
            .up()
          .up()
        .ele('leg')
          .ele('thigh_girth', measurement.thigh_girth)
            .up()
          .ele('mid_thigh_girth', measurement.mid_thigh_girth)
            .up()
          .ele('knee_girth', measurement.knee_girth)
            .up()
          .ele('calf_girth', measurement.calf_girth)
            .up()
          .ele('ankle_girth', measurement.ankle_girth)
            .up()
          .ele('cervical_to_knee_height', measurement.cervical_to_knee_height)
            .up()
          .ele('cervical_height', measurement.cervical_height)
            .up()
          .ele('knee_height', measurement.knee_height)
            .up()
          .ele('ankle_height', measurement.ankle_height)
            .up()
          .up()
        .ele('foot')
          .ele('foot_length', measurement.foot_length)
            .up()
          .ele('foot_width', measurement.foot_width)
            .up()
          .ele('foot_across_top', measurement.foot_across_top)
            .up()
          .up()
        .ele('body_structure')
          .ele('arm_type', ARM_TYPE[measurement.arm_type])
            .up()
          .ele('back_shape', BACK_SHAPE[measurement.back_shape])
            .up()
          .ele('chest_type', CHEST_TYPE[measurement.chest_type])
            .up()
          .ele('shoulder_type', SHOULDER_TYPE[measurement.shoulder_type])
            .up()
          .ele('stomach_shape', STOMACH_SHAPE[measurement.stomach_shape])
            .up()
        .up()
      .ele('colors')
        .ele('eye_color',measurement.person.eye_color)
          .up()
        .ele('hair_color', measurement.person.hair_color)
          .up()
        .ele('skin_complexion', measurement.person.skin_complexion)
          .up()
        .up()
      .ele('bio_data')
        .ele('blood_type',measurement.person.blood_type)
          .up()
        .ele('allergy', measurement.person.allergy)
          .up()
        .ele('eye_performance', measurement.person.eye_performance)
          .up()
        .up()
    var images = documentInfo.ele('images');
    if(measurement.images.length!=0) {
      for(var i = 0; i < measurement.images.length; i++) {
        var image = images.ele('image');
        image.att('rel', 'pictures/' + measurement.images[i].rel);
        image.att('href', fileNameList[i]);
      }
    }
  var xmlToString = doc.end({ pretty: true, indent: '  ', newline: '\n' });
  return xmlToString;
}

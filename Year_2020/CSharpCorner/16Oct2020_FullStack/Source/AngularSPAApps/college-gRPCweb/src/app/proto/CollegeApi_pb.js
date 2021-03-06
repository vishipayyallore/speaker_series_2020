// source: src/app/proto/CollegeApi.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.collegeapi.AllProfessorsResonse', null, global);
goog.exportSymbol('proto.collegeapi.GetProfessorRequest', null, global);
goog.exportSymbol('proto.collegeapi.GetProfessorResponse', null, global);
goog.exportSymbol('proto.collegeapi.NewProfessorRequest', null, global);
goog.exportSymbol('proto.collegeapi.NewProfessorResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.collegeapi.NewProfessorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.collegeapi.NewProfessorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.collegeapi.NewProfessorRequest.displayName = 'proto.collegeapi.NewProfessorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.collegeapi.NewProfessorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.collegeapi.NewProfessorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.collegeapi.NewProfessorResponse.displayName = 'proto.collegeapi.NewProfessorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.collegeapi.GetProfessorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.collegeapi.GetProfessorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.collegeapi.GetProfessorRequest.displayName = 'proto.collegeapi.GetProfessorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.collegeapi.GetProfessorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.collegeapi.GetProfessorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.collegeapi.GetProfessorResponse.displayName = 'proto.collegeapi.GetProfessorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.collegeapi.AllProfessorsResonse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.collegeapi.AllProfessorsResonse.repeatedFields_, null);
};
goog.inherits(proto.collegeapi.AllProfessorsResonse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.collegeapi.AllProfessorsResonse.displayName = 'proto.collegeapi.AllProfessorsResonse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.collegeapi.NewProfessorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.collegeapi.NewProfessorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.collegeapi.NewProfessorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.NewProfessorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    doj: (f = msg.getDoj()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    teaches: jspb.Message.getFieldWithDefault(msg, 3, ""),
    salary: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    isphd: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.collegeapi.NewProfessorRequest}
 */
proto.collegeapi.NewProfessorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.collegeapi.NewProfessorRequest;
  return proto.collegeapi.NewProfessorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.collegeapi.NewProfessorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.collegeapi.NewProfessorRequest}
 */
proto.collegeapi.NewProfessorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDoj(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeaches(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSalary(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsphd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.collegeapi.NewProfessorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.collegeapi.NewProfessorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.collegeapi.NewProfessorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.NewProfessorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDoj();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTeaches();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSalary();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getIsphd();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.collegeapi.NewProfessorRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.NewProfessorRequest} returns this
 */
proto.collegeapi.NewProfessorRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp doj = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.collegeapi.NewProfessorRequest.prototype.getDoj = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.collegeapi.NewProfessorRequest} returns this
*/
proto.collegeapi.NewProfessorRequest.prototype.setDoj = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.collegeapi.NewProfessorRequest} returns this
 */
proto.collegeapi.NewProfessorRequest.prototype.clearDoj = function() {
  return this.setDoj(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.collegeapi.NewProfessorRequest.prototype.hasDoj = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string teaches = 3;
 * @return {string}
 */
proto.collegeapi.NewProfessorRequest.prototype.getTeaches = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.NewProfessorRequest} returns this
 */
proto.collegeapi.NewProfessorRequest.prototype.setTeaches = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double salary = 4;
 * @return {number}
 */
proto.collegeapi.NewProfessorRequest.prototype.getSalary = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.collegeapi.NewProfessorRequest} returns this
 */
proto.collegeapi.NewProfessorRequest.prototype.setSalary = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional bool isPhd = 5;
 * @return {boolean}
 */
proto.collegeapi.NewProfessorRequest.prototype.getIsphd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.collegeapi.NewProfessorRequest} returns this
 */
proto.collegeapi.NewProfessorRequest.prototype.setIsphd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.collegeapi.NewProfessorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.collegeapi.NewProfessorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.collegeapi.NewProfessorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.NewProfessorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    professorid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.collegeapi.NewProfessorResponse}
 */
proto.collegeapi.NewProfessorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.collegeapi.NewProfessorResponse;
  return proto.collegeapi.NewProfessorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.collegeapi.NewProfessorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.collegeapi.NewProfessorResponse}
 */
proto.collegeapi.NewProfessorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfessorid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.collegeapi.NewProfessorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.collegeapi.NewProfessorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.collegeapi.NewProfessorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.NewProfessorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfessorid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string professorId = 1;
 * @return {string}
 */
proto.collegeapi.NewProfessorResponse.prototype.getProfessorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.NewProfessorResponse} returns this
 */
proto.collegeapi.NewProfessorResponse.prototype.setProfessorid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.collegeapi.NewProfessorResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.NewProfessorResponse} returns this
 */
proto.collegeapi.NewProfessorResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.collegeapi.GetProfessorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.collegeapi.GetProfessorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.collegeapi.GetProfessorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.GetProfessorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    professorid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.collegeapi.GetProfessorRequest}
 */
proto.collegeapi.GetProfessorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.collegeapi.GetProfessorRequest;
  return proto.collegeapi.GetProfessorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.collegeapi.GetProfessorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.collegeapi.GetProfessorRequest}
 */
proto.collegeapi.GetProfessorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfessorid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.collegeapi.GetProfessorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.collegeapi.GetProfessorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.collegeapi.GetProfessorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.GetProfessorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfessorid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string professorId = 1;
 * @return {string}
 */
proto.collegeapi.GetProfessorRequest.prototype.getProfessorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.GetProfessorRequest} returns this
 */
proto.collegeapi.GetProfessorRequest.prototype.setProfessorid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.collegeapi.GetProfessorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.collegeapi.GetProfessorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.collegeapi.GetProfessorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.GetProfessorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    professorid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    doj: (f = msg.getDoj()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    teaches: jspb.Message.getFieldWithDefault(msg, 4, ""),
    salary: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    isphd: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.collegeapi.GetProfessorResponse}
 */
proto.collegeapi.GetProfessorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.collegeapi.GetProfessorResponse;
  return proto.collegeapi.GetProfessorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.collegeapi.GetProfessorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.collegeapi.GetProfessorResponse}
 */
proto.collegeapi.GetProfessorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfessorid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDoj(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeaches(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSalary(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsphd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.collegeapi.GetProfessorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.collegeapi.GetProfessorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.collegeapi.GetProfessorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.GetProfessorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfessorid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDoj();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTeaches();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSalary();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getIsphd();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string professorId = 1;
 * @return {string}
 */
proto.collegeapi.GetProfessorResponse.prototype.getProfessorid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.GetProfessorResponse} returns this
 */
proto.collegeapi.GetProfessorResponse.prototype.setProfessorid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.collegeapi.GetProfessorResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.GetProfessorResponse} returns this
 */
proto.collegeapi.GetProfessorResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp doj = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.collegeapi.GetProfessorResponse.prototype.getDoj = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.collegeapi.GetProfessorResponse} returns this
*/
proto.collegeapi.GetProfessorResponse.prototype.setDoj = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.collegeapi.GetProfessorResponse} returns this
 */
proto.collegeapi.GetProfessorResponse.prototype.clearDoj = function() {
  return this.setDoj(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.collegeapi.GetProfessorResponse.prototype.hasDoj = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string teaches = 4;
 * @return {string}
 */
proto.collegeapi.GetProfessorResponse.prototype.getTeaches = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.GetProfessorResponse} returns this
 */
proto.collegeapi.GetProfessorResponse.prototype.setTeaches = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double salary = 5;
 * @return {number}
 */
proto.collegeapi.GetProfessorResponse.prototype.getSalary = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.collegeapi.GetProfessorResponse} returns this
 */
proto.collegeapi.GetProfessorResponse.prototype.setSalary = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool isPhd = 6;
 * @return {boolean}
 */
proto.collegeapi.GetProfessorResponse.prototype.getIsphd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.collegeapi.GetProfessorResponse} returns this
 */
proto.collegeapi.GetProfessorResponse.prototype.setIsphd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.collegeapi.AllProfessorsResonse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.collegeapi.AllProfessorsResonse.prototype.toObject = function(opt_includeInstance) {
  return proto.collegeapi.AllProfessorsResonse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.collegeapi.AllProfessorsResonse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.AllProfessorsResonse.toObject = function(includeInstance, msg) {
  var f, obj = {
    professorsList: jspb.Message.toObjectList(msg.getProfessorsList(),
    proto.collegeapi.GetProfessorResponse.toObject, includeInstance),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.collegeapi.AllProfessorsResonse}
 */
proto.collegeapi.AllProfessorsResonse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.collegeapi.AllProfessorsResonse;
  return proto.collegeapi.AllProfessorsResonse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.collegeapi.AllProfessorsResonse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.collegeapi.AllProfessorsResonse}
 */
proto.collegeapi.AllProfessorsResonse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.collegeapi.GetProfessorResponse;
      reader.readMessage(value,proto.collegeapi.GetProfessorResponse.deserializeBinaryFromReader);
      msg.addProfessors(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.collegeapi.AllProfessorsResonse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.collegeapi.AllProfessorsResonse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.collegeapi.AllProfessorsResonse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.collegeapi.AllProfessorsResonse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfessorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.collegeapi.GetProfessorResponse.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated GetProfessorResponse professors = 1;
 * @return {!Array<!proto.collegeapi.GetProfessorResponse>}
 */
proto.collegeapi.AllProfessorsResonse.prototype.getProfessorsList = function() {
  return /** @type{!Array<!proto.collegeapi.GetProfessorResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.collegeapi.GetProfessorResponse, 1));
};


/**
 * @param {!Array<!proto.collegeapi.GetProfessorResponse>} value
 * @return {!proto.collegeapi.AllProfessorsResonse} returns this
*/
proto.collegeapi.AllProfessorsResonse.prototype.setProfessorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.collegeapi.GetProfessorResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.collegeapi.GetProfessorResponse}
 */
proto.collegeapi.AllProfessorsResonse.prototype.addProfessors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.collegeapi.GetProfessorResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.collegeapi.AllProfessorsResonse} returns this
 */
proto.collegeapi.AllProfessorsResonse.prototype.clearProfessorsList = function() {
  return this.setProfessorsList([]);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.collegeapi.AllProfessorsResonse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.collegeapi.AllProfessorsResonse} returns this
 */
proto.collegeapi.AllProfessorsResonse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.collegeapi.AllProfessorsResonse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.collegeapi.AllProfessorsResonse} returns this
 */
proto.collegeapi.AllProfessorsResonse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.collegeapi);

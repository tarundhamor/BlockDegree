const mongoose = require("mongoose");

const socialPostEventSchema = mongoose.Schema({
  id: { type: String, unique: true },
  eventName: String,
  eventPurpose: String,
  eventType: String, // type of event, value can be one of registrations, certificates, visits or one-time
  templateId: String,
  /**
   * Status the current status of the events
   */
  status: String,
  platform: {
    facebook: Boolean,
    twitter: Boolean,
    linkedin: Boolean,
    telegram: Boolean
  },
  recurring: Boolean, // optional
  recurringRule: {},
  /* 
  
    Event-Based Triggers

    1. conditionVar, ConditionScope, conditionOperator, conditionOperator -> Required to evaluate the expression.
    2. scope for the condition

  */
  variableTrigger: Boolean,
  conditionVar: String,
  conditionInterval: String,
  conditionValue: Number,
  conditionScopeStart: String,
  conditionScopeStop: String,
  conditionPrevTrigger: String,
  nearestTS: String,
  /*

  Next Scheduled Post Timestamp
  
  -> timestamp at which the next social-post is to be posted

  */
  nextPostScheduleTS: String,
  nextPostStatus: String,
  nextPostPath: String
});

module.exports = mongoose.model("Social_Post_Event", socialPostEventSchema);

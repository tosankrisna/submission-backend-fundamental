const Joi = require('joi');

const PostPlaylistPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const PostPlaylistsongPayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

module.exports = { 
  PostPlaylistPayloadSchema, 
  PostPlaylistsongPayloadSchema, 
};
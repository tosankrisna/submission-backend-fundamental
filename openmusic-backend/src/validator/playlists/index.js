const InvariantError = require('../../exceptions/InvariantError');
const { 
  PostPlaylistPayloadSchema, 
  PostPlaylistsongPayloadSchema, 
} = require('./schema');

const PlaylistsValidator = {
  validatePostPlaylistPayload: (payload) => {
    const validationResult = PostPlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePostPlaylistsongPayload: (payload) => {
    const validationResult = PostPlaylistsongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlaylistsValidator;
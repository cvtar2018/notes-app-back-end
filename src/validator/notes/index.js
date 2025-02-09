const { NotesPayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotesPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new Error(validationResult.error.mesage);
    }
  },
};

module.exports = { NotesValidator };

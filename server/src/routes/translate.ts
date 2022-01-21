import { Router } from 'express';
import { GoogleTranslate, TagEdit } from '../controllers/translate';

const translateRoter = Router();

translateRoter.post('/', GoogleTranslate);
translateRoter.post('/tag', TagEdit);

export default translateRoter;

import { Router } from 'express';
import { deleteUrl, getUrl, openUrl, shortenUrl } from '../controllers/urlsController.js';
import { validateUrlById, validateUrlByShortUrl, validateUrlIdByCustomer } from '../middlewares/validateUrl.js';
import { validateAuthorization } from '../middlewares/validateAuth.js';
import { validateBodyUrl } from '../middlewares/validateSchemas.js';

const router = Router();

router.post('/urls/shorten', validateBodyUrl, validateAuthorization, shortenUrl);
router.get('/urls/:id', validateUrlById, getUrl);
router.get('/urls/open/:shortUrl', validateUrlByShortUrl, openUrl);
router.delete('/urls/:id', validateAuthorization, validateUrlById, validateUrlIdByCustomer, deleteUrl);

export default router;

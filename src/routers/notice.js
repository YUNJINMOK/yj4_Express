import express from 'express';
import { getList, noticeDelete, noticeDetail, noticeEdit, noticeWrite } from '../../controllers/noticeControllers';

const noticeRouter = express.Router();

noticeRouter.get('', getList);
noticeRouter.post('/write', noticeWrite);
noticeRouter.get(`/:id`, noticeDetail);
noticeRouter.post('/:id/edit', noticeEdit);
noticeRouter.post('/:id/delete', noticeDelete);

export default noticeRouter;

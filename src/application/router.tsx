import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

import {Layout} from '../core/layout';

import {NotFound} from '../pages/not-found.page';
import {About} from '../pages/about.page';
import {Auth} from '../pages/auth.page';
import {Profile} from '../pages/profile.page';
import {FAQPage} from '../pages/faq.page';

import {CommunityList} from '../pages/community-list.page';
import {CommunityCreate} from '../pages/community-create.page';
import {CommunityView} from '../pages/community-view.page';
import {CommunityEdit} from '../pages/community-edit.page';
import {CommunityTop} from '../pages/community-top.page';
import {MediaList} from '../pages/media-list.page';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index path='/' element={<About />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/community/list' element={<CommunityList /> } />
                    <Route path='/community/:id/top' element={<CommunityTop /> } />
                    <Route path='/community/create' element={<CommunityCreate />} />
                    <Route path='/community/:id' element={<CommunityView />} />
                    <Route path='/community/:id/edit' element={<CommunityEdit />} />
                    <Route path='/media/list' element={<MediaList />} />
                    <Route path='/faq' element={<FAQPage />} />
                    <Route path='/not-found' element={<NotFound />} />
                    <Route path='*' element={<Navigate to='not-found' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

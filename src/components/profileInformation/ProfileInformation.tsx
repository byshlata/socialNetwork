import { ReactElement } from 'react';

import s from './ProfileInformation.module.sass';

import { AboutUser } from 'components/aboutUser/AboutUser';
import { ContactsUserBlock } from 'components/contactsUserBlock/ContastsUserBlock';
import { DescriptionJobSearch } from 'components/descriptionJobSearch/DescriptionJobSearch';
import { ComponentsUserTypes, Nullable } from 'types';

export type ProfileInformationType = {
  aboutMe: Nullable<string>;
  contacts: ComponentsUserTypes;
  lookingForAJob: boolean;
  lookingForAJobDescription: Nullable<string>;
};

export const ProfileInformation = ({
  contacts,
  lookingForAJobDescription,
  lookingForAJob,
  aboutMe,
}: ProfileInformationType): ReactElement => (
  <div className={s.informationWrapper}>
    {aboutMe && <AboutUser aboutMe={aboutMe} />}

    {lookingForAJob ||
      (lookingForAJobDescription && (
        <DescriptionJobSearch
          searchJobDescription={lookingForAJobDescription}
          isSearchJob={lookingForAJob}
        />
      ))}
    <ContactsUserBlock contacts={contacts} />
  </div>
);

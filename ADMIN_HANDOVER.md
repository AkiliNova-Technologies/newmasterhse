# NewMaster website administration handover

## Sanity Studio access

The NewMaster content Studio is available at [https://newmasterhse-admin.sanity.studio](https://newmasterhse-admin.sanity.studio). It is separate from the public website.

Each authorised staff member must sign in with their own Sanity account. Do not share passwords, API keys, tokens, or another person's account. A NewMaster project administrator can invite an editor by opening the NewMaster project in [Sanity project management](https://www.sanity.io/manage), selecting the project, and inviting the staff member with the minimum suitable role.

The public website reads published content from Sanity project `oqdatg5j`, dataset `production`. Drafts are not displayed on the public website.

## Managing News

1. In Studio, select **News** and choose **Create**.
2. Add the title, then use **Generate** beside **Slug**. The slug becomes the article web address, so avoid changing it after publication.
3. Add a clear summary in **Excerpt**, select a category from the controlled **Category** dropdown, and enter the publication date.
4. Upload a suitable hero image and add the article body.
5. Use the body toolbar for normal paragraphs, H2 section headings, H3 subheadings, bullet lists, numbered lists, and links. Use **Important note** for key cautions or disclaimers.
6. Review the draft in Studio and, where appropriate, ask a colleague to review the title, image, category, links, and content before publishing.
7. Select **Publish**. Published content normally appears on the website after its short content cache refresh.

## Managing Insights

Use the same process under **Insights**: create the item, generate and check its slug, add its excerpt, controlled category, publication date, hero image, and structured body, then review and publish it. Insights support the same paragraphs, H2/H3 headings, lists, links, and Important Note blocks as News.

## Managing Team Members

1. In Studio, select **Team member** and choose **Create**.
2. Enter the person's name and role/title, then add their biography and a professional profile photo.
3. Set **Display order**. Lower numbers appear first; change these numbers to reorder people.
4. Review the draft and select **Publish** when it is ready. To remove someone from the public site without deleting the record, unpublish it.

Only published Team Members appear on the public website. Draft and unpublished Team Members do not appear publicly.

## Images

Use clear, professional images that are relevant to the content. Give images meaningful alt text where the Studio field is available or where editorial context is entered. Avoid unnecessarily large uploads; resize or compress very large originals before uploading when practical. For News, Insights, and Team Members, replace CMS-managed images in Sanity rather than editing website source code.

## Categories

Categories are deliberately controlled through a dropdown so that article filtering and labelling remain consistent. Choose one of the following categories:

- Workplace Safety
- Occupational Health
- Emergency Preparedness
- Training and Compliance
- Health and Wellness
- Industry Insights
- Company Updates
- Community Engagement

Do not create arbitrary variants such as alternate spellings or near-duplicate categories. Ask a developer if a genuinely new category is required.

## What staff can change

Staff can manage published News, Insights, Team Members, and their CMS-managed images and content through Sanity Studio.

Developer support is required for navigation changes, page layouts, new website functionality, contact-form service or configuration, environment variables, deployments, domain or DNS work, code changes, and new CMS content types. Services, Podcasts, and Site Settings currently remain static website content and are not yet managed by the public site through Sanity.

## Contact form monitoring

Website enquiries are expected to arrive at the inbox configured by the hosting environment's `CONTACT_EMAIL` setting. The form sends through Resend and requires these hosting environment variables:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
RESEND_FROM_EMAIL=
```

Keep all values in the hosting environment only. Never put secrets in source control, documentation, or email. Staff should periodically submit a genuine test enquiry, confirm it reaches the monitored inbox, and verify that replying reaches the sender. Coordinate with the website administrator before testing if a test could disrupt normal enquiry handling.

## Deployment and backups

Sanity content is hosted separately from the Next.js website. Publishing CMS content normally does not require a website code deployment; changes to website code do require deployment through the approved hosting process.

Keep website source code in the Git repository. NewMaster should retain ownership and recovery access for important accounts, domains, hosting, Sanity, Resend, and credentials. Maintain exports or other backups of business-critical content according to NewMaster's internal backup process.

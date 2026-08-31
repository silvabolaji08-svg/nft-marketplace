const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const sm = { ...p, width: 15, height: 15 };

export const BasicsIcon = () => <svg {...sm}><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="10" y1="10" x2="10" y2="20" /></svg>;
export const BlockchainIcon = () => <svg {...sm}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><line x1="10" y1="6.5" x2="14" y2="6.5" /><line x1="6.5" y1="10" x2="6.5" y2="14" /></svg>;
export const ShieldIcon = () => <svg {...sm}><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" /></svg>;
export const TagIcon = () => <svg {...sm}><path d="M20.6 12.4 12.6 20.4a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1 0-2.8L10.6 2.4a2 2 0 0 1 1.4-.6H19a2 2 0 0 1 2 2v6.6a2 2 0 0 1-.4 1.4z" /><circle cx="16" cy="7" r="1.3" fill="currentColor" /></svg>;
export const TrendUpIcon = () => <svg {...sm}><polyline points="3 17 9 11 13 15 21 6" /><polyline points="15 6 21 6 21 12" /></svg>;

export const CreateIcon = () => <svg {...p}><path d="M12 5v14M5 12h14" /></svg>;
export const GuideIcon = () => <svg {...p}><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z" /><path d="M4 4v13a3 3 0 0 0 3 3" /></svg>;
export const CommunityIcon = () => <svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 8.5a3.5 3.5 0 1 1 3 5.3M21.5 20a6 6 0 0 0-4.5-5.8" /></svg>;
export const SupportIcon = () => <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M9 9a3 3 0 1 1 4 2.8c-.7.3-1.2.9-1.2 1.7v.5" /><circle cx="12" cy="17" r="0.5" fill="currentColor" /></svg>;

export const ArrowRight = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;

export const HelpCenterIcon = () => <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.4v.3" /><circle cx="12" cy="16.5" r="0.5" fill="currentColor" /></svg>;
export const ContactIcon = () => <svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2z" /></svg>;
export const ForumIcon = () => <svg {...p}><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4c-1.4 0-2.7-.3-3.9-.9L3 20l1-5.7a8.4 8.4 0 1 1 17-2.8z" /></svg>;
export const FlagIcon = () => <svg {...p}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="3" /></svg>;
export const MailIcon2 = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>;
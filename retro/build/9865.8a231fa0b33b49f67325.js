(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9865,7043],{87043:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var a=n(273),o=n(86518),s=n(71759),r=n(13106),l=n(53297),i=n(82336),c=n(33498),d=n(77031);const u="jp-RetroKernelStatus-error",p="jp-RetroKernelStatus-warn",h="jp-RetroKernelStatus-info",C="jp-RetroKernelStatus-fade",f={id:"@retrolab/application-extension:checkpoints",autoStart:!0,requires:[r.IDocumentManager],optional:[i.IRetroShell],activate:(e,t,n)=>{const{shell:a}=e,r=new d.Widget;r.id=o.DOMUtils.createDomID(),r.addClass("jp-RetroCheckpoint"),e.shell.add(r,"top",{rank:100});const l=async()=>{const e=a.currentWidget;if(!e)return;const n=t.contextForWidget(e);null==n||n.fileChanged.disconnect(l),null==n||n.fileChanged.connect(l);const o=await(null==n?void 0:n.listCheckpoints());if(!o)return;const i=o[o.length-1];r.node.textContent=`Last Checkpoint: ${s.Time.formatHuman(new Date(i.last_modified))}`};n&&n.currentChanged.connect(l),new c.Poll({auto:!0,factory:()=>l(),frequency:{interval:2e3,backoff:!1},standby:"when-hidden"})}},k={id:"@retrolab/application-extension:kernel-logo",autoStart:!0,requires:[i.IRetroShell],activate:(e,t)=>{const{serviceManager:n}=e,a=s.PageConfig.getBaseUrl();let o;const r=async()=>{var s,i,c,u,p;o&&(o.dispose(),o.parent=null);const h=t.currentWidget;if(!(h instanceof l.NotebookPanel))return;await h.sessionContext.ready,h.sessionContext.kernelChanged.disconnect(r),h.sessionContext.kernelChanged.connect(r);const C=null!==(c=null===(i=null===(s=h.sessionContext.session)||void 0===s?void 0:s.kernel)||void 0===i?void 0:i.name)&&void 0!==c?c:"",f=null===(p=null===(u=n.kernelspecs)||void 0===u?void 0:u.specs)||void 0===p?void 0:p.kernelspecs[C];if(!f)return;let k=f.resources["logo-64x64"];if(!k)return;const v=k.indexOf("kernelspecs");k=a+k.slice(v);const g=document.createElement("div"),m=document.createElement("img");m.src=k,m.title=f.display_name,g.appendChild(m),o=new d.Widget({node:g}),o.addClass("jp-RetroKernelLogo"),e.shell.add(o,"top",{rank:10010})};t.currentChanged.connect(r)}},v={id:"@retrolab/application-extension:kernel-status",autoStart:!0,requires:[i.IRetroShell],activate:(e,t)=>{const n=new d.Widget;n.addClass("jp-RetroKernelStatus"),e.shell.add(n,"menu",{rank:10010});const a=e=>{const t=e.kernelDisplayStatus;let a=`Kernel ${s.Text.titleCase(t)}`;switch(n.removeClass(u),n.removeClass(p),n.removeClass(h),n.removeClass(C),t){case"busy":case"idle":a="",n.addClass(C);break;case"dead":case"terminating":n.addClass(u);break;case"unknown":n.addClass(p);break;default:n.addClass(h),n.addClass(C)}n.node.textContent=a};t.currentChanged.connect((async()=>{const e=t.currentWidget;e instanceof l.NotebookPanel&&e.sessionContext.statusChanged.connect(a)}))}},g={id:"@retrolab/application-extension:paths",activate:e=>{if(!(e instanceof i.RetroApp))throw new Error(`${g.id} must be activated in RetroLab.`);return e.paths},autoStart:!0,provides:a.JupyterFrontEnd.IPaths},m={id:"@retrolab/application-extension:shell",activate:e=>{if(!(e.shell instanceof i.RetroShell))throw new Error(`${m.id} did not find a RetroShell instance.`);return e.shell},autoStart:!0,provides:i.IRetroShell},R=[f,k,v]}}]);
//# sourceMappingURL=9865.8a231fa0b33b49f67325.js.map
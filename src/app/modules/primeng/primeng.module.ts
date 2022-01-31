import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { Menu, MenuModule } from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RippleModule,
		TooltipModule,
		SelectButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MultiSelectModule,
		PasswordModule,
		ToastModule,
		CardModule,
		AvatarModule,
		SidebarModule,
		AvatarGroupModule,
		TableModule,
		CalendarModule,
		TabMenuModule,
		MenuModule,
		TieredMenuModule,
		SkeletonModule,
		ScrollTopModule,
		DividerModule,
		InputNumberModule,
		MessageModule,
		MessagesModule,
		DropdownModule,
		BadgeModule,
		OverlayPanelModule,
		InputTextModule,
	],
	exports: [
		CommonModule,
		RippleModule,
		TooltipModule,
		SelectButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MultiSelectModule,
		CardModule,
		AvatarModule,
		AvatarGroupModule,
		InputNumberModule,
		PasswordModule,
		SidebarModule,
		ToastModule,
		TabMenuModule,
		MenuModule,
		TieredMenuModule,
		CalendarModule,
		SkeletonModule,
		TableModule,
		ScrollTopModule,
		DividerModule,
		MessageModule,
		MessagesModule,
		DropdownModule,
		BadgeModule,
		OverlayPanelModule,
		InputTextModule,
	]
})
export class PrimengModule { }



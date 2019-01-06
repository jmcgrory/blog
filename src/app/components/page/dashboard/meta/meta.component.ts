import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../../../services/notice.service';
import { APIService } from '../../../../services/API.service';
import APIFilter from '../../../../models/Filter/APIFilter';
import GroupModel from '../../../../models/GroupModel';
import TagModel from '../../../../models/TagModel';
import CategoryModel from '../../../../models/CategoryModel';
import Notice from '../../../../models/Notice/Notice';

@Component({
    selector: 'app-meta',
    templateUrl: './meta.component.html'
})
export class MetaComponent implements OnInit {

    groups: GroupModel[] = [];
    newGroup: object

    constructor(
        private noticeService: NoticeService,
        private apiService: APIService,
    ) { }

    ngOnInit() {
        this.newGroup = this.getBlankNewGroup();
        this.loadGroups();
    }

    loadGroups = (): void => {
        const idFilter = new APIFilter({});
        this.apiService.getIds('group', idFilter)
            .subscribe((ids: string[]) => {
                this.apiService.getModels('group', ids)
                .subscribe((groups: object[]) => {
                    this.groups = groups.map((group) => {
                       if (group['type'] === 'tag') {
                           return new TagModel(group);
                       } else {
                           return new CategoryModel(group);
                       }
                    });
                });
            }
        );
    }

    updateGroup = (group: GroupModel): void => {
        this.apiService.update('group', group).subscribe((data) => {
            this.noticeService.add(new Notice(
                `Successfully updated ${group.type}`,
                'success'
            ));
        });
    }

    deleteGroup = (group: GroupModel): void => {
        if (window.confirm(`Delete ${group.type}: ${group.name}?`)) {
            this.apiService.delete('group', group.id.toString())
                .subscribe((data) => {
                if (data) {
                    this.noticeService.add(new Notice(
                        `Successfully deleted ${group.type}`,
                        'success'
                    ));
                    this.loadGroups();
                }
            });
        }
    }

    addGroup = (newGroup: object): void => {
        const Model = newGroup['type'] === 'tag' ? TagModel : CategoryModel;
        this.apiService.save(
            'group',
            new Model(newGroup)
        ).subscribe((data) => {
            this.noticeService.add(new Notice(
                `Successfully saved new ${newGroup['type']}`,
                'success'
            ));
            this.loadGroups();
            this.newGroup = this.getBlankNewGroup();
        });
    }

    getBlankNewGroup = (): object => {
        return {
            name: '',
            type: '',
            description: '',
        };
    }
}
